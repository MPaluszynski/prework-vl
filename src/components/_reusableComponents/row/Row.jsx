import "./row-styles.css";
import { useState } from "react";

export const Row = (props) => {
  const [planetName, setPlanetName] = useState("");
  const [speciesName, setSpeciesName] = useState("");
  const [firstMachine, setfirstMachine] = useState("");
  const [secondMachine, setSecondMachine] = useState("");

  if (props.homeworld && props.homeworld !== "" && props.isHeaderRow !== true) {
    fetch(props.homeworld)
      .then((response) => response.json())
      .then((data) => {
        setPlanetName(data.name);
      });
  }

  if (props.species && props.species !== "" && props.isHeaderRow !== true) {
    fetch(props.species)
      .then((response) => response.json())
      .then((data) => {
        setSpeciesName(data.name);
      });
  }

  if (props.vehiclesAndStarships[0].length > 1) {
    fetch(props.vehiclesAndStarships[0])
      .then((response) => response.json())
      .then((data) => {
        setfirstMachine(data.name);
      });
  }

  if (props.vehiclesAndStarships[1].length > 1) {
    fetch(props.vehiclesAndStarships[1])
      .then((response) => response.json())
      .then((data) => {
        setSecondMachine(data.name);
      });
  }

  const firstMachineName =
    props.vehiclesAndStarships[0].length > 1 ? firstMachine : "";
  const secondMachineName =
    props.vehiclesAndStarships[0].length > 1 ? secondMachine : "";

  return (
    <>
      <div className="row__fragment">
        <input type="checkbox" className="row__fragment--checkbox" />
      </div>
      <div className="row__fragment">
        <span>{props.name}</span>
        <span className="row__fragment--species">{speciesName}</span>
      </div>
      <div className="row__fragment">{props.born}</div>
      <div className="row__fragment">
        {!!props.isHeaderRow ? props.homeworld : planetName}
      </div>
      <div className="row__fragment">
        {!!props.isHeaderRow ? (
          props.vehiclesAndStarships
        ) : (
          <>
            <span>{firstMachineName}</span>
            <span>{secondMachineName}</span>
          </>
        )}
      </div>
      <div className="row__fragment">
        {!!props.isHeaderRow ? (
          <>{"Status"}</>
        ) : !!props.status ? (
          <>✔️ Active</>
        ) : (
          <>❌Deactivated</>
        )}
      </div>
    </>
  );
};
