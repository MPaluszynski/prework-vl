import React from "react";
import "./data-styles.css";
import { Row } from "../_reusableComponents/row/Row.jsx";

export const Data = (props) => {
  let filterStatus;
  if (props.globalStatus === "All") {
    filterStatus = null;
  } else if (props.globalStatus === "Active") {
    filterStatus = true;
  } else if (props.globalStatus === "Deactivated") {
    filterStatus = false;
  }

  const renderArray = props.peopleArray.map((person, index) => {
    const getRandomItem = (array) => {
      return array[Math.floor(Math.random() * array.length)];
    };

    let firstMachineUrl = "";
    let secondMachineUrl = "";

    const status = !props.activePeopleArray.includes(person);

    const jointArray = [...person.vehicles, ...person.starships];

    if (jointArray.length > 0) {
      if (jointArray.length < 2) {
        firstMachineUrl = jointArray[0];
      } else if (jointArray.length < 3) {
        firstMachineUrl = jointArray[0];
        secondMachineUrl = jointArray[1];
      } else if (jointArray.length >= 3) {
        firstMachineUrl = getRandomItem(person.vehicles);
        secondMachineUrl = getRandomItem(person.starships);
      }
    }

    return filterStatus === null || filterStatus === status ? (
      <Row
        key={index}
        name={person.name}
        species={person.species[0]}
        born={person.birth_year}
        homeworld={person.homeworld}
        vehiclesAndStarships={[firstMachineUrl, secondMachineUrl]}
        status={status}
        checkedNames={props.checkedNames}
        setCheckedNames={props.setCheckedNames}
        checkOverride={props.checkOverride}
        setCheckOverride={props.setCheckOverride}
        currentElement={props.currentElement}
      />
    ) : (
      <React.Fragment key={index}></React.Fragment>
    );
  });

  return (
    <div className="data">
      <div className="data__table">
        <Row
          name={"Name"}
          born={"Born"}
          homeworld={"Homeworld"}
          vehiclesAndStarships={"Vehicles and Starships"}
          status={"Status"}
          isHeaderRow={true}
        />
        {renderArray}
      </div>
    </div>
  );
};
