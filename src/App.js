import "./styles/main-styles.css";
import { useState, useEffect } from "react";

import { Header } from "./components/header/Header.jsx";
import { Data } from "./components/data/Data.jsx";
import { Filters } from "./components/filters/Filters.jsx";
import { Footer } from "./components/footer/Footer.jsx";

export const App = () => {
  const peopleUrl = "https://swapi.py4e.com/api/people/";
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [peopleArray, setPeopleArray] = useState([]);
  useEffect(() => {
    fetch(peopleUrl)
      .then((response) => response.json())
      .then((data) => {
        setNumberOfPeople(data.count);
        setPeopleArray(data.results);
      });
  }, []);

  console.log(numberOfPeople);
  console.log(peopleArray);

  return (
    <div>
      <Header />
      <Filters />
      <Data />
      <Footer />
    </div>
  );
};

export default App;
