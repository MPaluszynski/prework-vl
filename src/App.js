import "./styles/main-styles.css";
import { useState, useEffect } from "react";

import { Header } from "./components/header/Header.jsx";
import { Data } from "./components/data/Data.jsx";
import { Filters } from "./components/filters/Filters.jsx";
import { Footer } from "./components/footer/Footer.jsx";

export const App = () => {
  const [data, setData] = useState({});
  const [currentElement, setCurrentElement] = useState(1);
  const [page, setPage] = useState(1);

  const url = `https://swapi.py4e.com/api/people/?page=${page}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [page]);

  const lastElement = !!data.results ? (data.count / 5 + 1).toFixed(0) : 1;
  const peopleArray = !!data.results ? [...data.results] : [];

  return (
    <div>
      {!!data.results ? (
        <>
          <Header />
          <Filters />
          <Data
            peopleArray={
              currentElement % 2 !== 0
                ? peopleArray.splice(0, 5)
                : peopleArray.splice(5, 9)
            }
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
