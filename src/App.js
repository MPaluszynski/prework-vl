import "./styles/main-styles.css";
import { useState, useEffect } from "react";

import { Header } from "./components/header/Header.jsx";
import { Data } from "./components/data/Data.jsx";
import { Filters } from "./components/filters/Filters.jsx";
import { Footer } from "./components/footer/Footer.jsx";

export const App = () => {
  const [data, setData] = useState({});
  const [searchedInput, setSearchedInput] = useState("");
  const [currentElement, setCurrentElement] = useState(1);
  const [page, setPage] = useState(1);
  const [checkedNames, setCheckedNames] = useState([]);
  const [activePeopleArray, setActivePeopleArray] = useState([]);
  const [removePeopleArray, setRemovePeopleArray] = useState([]);
  const [filteredSpecies, setFilteredSpecies] = useState([]);
  const [filteredHomeworlds, setFilteredHomeworlds] = useState([]);
  const [globalStatus, setGlobalStatus] = useState("All");
  const [checkOverride, setCheckOverride] = useState(false);

  const urlParam = !!searchedInput ? `search=${searchedInput}` : `page=${page}`;
  const hookParam = !!searchedInput ? searchedInput : page;

  const url = `https://swapi.py4e.com/api/people/?${urlParam}`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [hookParam, url]);

  const lastElement = !!data.results ? (data.count / 5 + 1).toFixed(0) : 1;

  let peopleArray = !!data.results
    ? currentElement % 2 !== 0
      ? [...data.results].splice(0, 5)
      : [...data.results].splice(5, 9)
    : [];

  if (removePeopleArray.length > 0) {
    peopleArray = peopleArray.filter((person) => {
      return !removePeopleArray.includes(person);
    });
  }

  if (filteredSpecies.length > 0) {
    peopleArray = peopleArray.filter((person) => {
      return filteredSpecies.includes(person.species[0]);
    });
  }

  if (filteredHomeworlds.length > 0) {
    peopleArray = peopleArray.filter((person) => {
      return filteredHomeworlds.includes(person.homeworld);
    });
  }

  return (
    <div>
      {!!data.results ? (
        <>
          <Header />
          <Filters
            setSearchedInput={setSearchedInput}
            peopleArray={peopleArray}
            checkedNames={checkedNames}
            setActivePeopleArray={setActivePeopleArray}
            setRemovePeopleArray={setRemovePeopleArray}
            setCheckOverride={setCheckOverride}
            setFilteredSpecies={setFilteredSpecies}
            setFilteredHomeworlds={setFilteredHomeworlds}
            setGlobalStatus={setGlobalStatus}
          />
          <Data
            peopleArray={peopleArray}
            checkedNames={checkedNames}
            setCheckedNames={setCheckedNames}
            activePeopleArray={activePeopleArray}
            page={page}
            checkOverride={checkOverride}
            setCheckOverride={setCheckOverride}
            globalStatus={globalStatus}
            currentElement={currentElement}
          />
          <Footer
            lastElement={lastElement}
            currentElement={currentElement}
            setCurrentElement={setCurrentElement}
            page={page}
            setPage={setPage}
          />
        </>
      ) : null}
    </div>
  );
};

export default App;
