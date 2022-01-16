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

  const urlParam = !!searchedInput ? `search=${searchedInput}` : `page=${page}`;
  const hookParam = !!searchedInput ? searchedInput : page;

  const url = `https://swapi.py4e.com/api/people/?${urlParam}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [hookParam]);

  const lastElement = !!data.results ? (data.count / 5 + 1).toFixed(0) : 1;

  let peopleArray = !!data.results
    ? currentElement % 2 !== 0
      ? [...data.results].splice(0, 5)
      : [...data.results].splice(5, 9)
    : [];

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
          />
          <Data
            peopleArray={peopleArray}
            checkedNames={checkedNames}
            setCheckedNames={setCheckedNames}
            activePeopleArray={activePeopleArray}
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
