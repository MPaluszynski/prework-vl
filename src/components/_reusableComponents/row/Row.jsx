import "./row-styles.css";
import { useState } from "react";
import styled from "styled-components";

export const Row = (props) => {
  const StyledRowFragment = styled.div`
    background: ${!!props.status ? "#FFFFFF" : "#F6F8FA"};
    color: ${!!props.status ? "##1A2328" : "#5F6569"};
  `;

  const [planetName, setPlanetName] = useState("");
  const [speciesName, setSpeciesName] = useState("");
  const [firstMachine, setfirstMachine] = useState("");
  const [secondMachine, setSecondMachine] = useState("");

  const [checked, setChecked] = useState(false);

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

  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      props.setCheckedNames([...props.checkedNames, props.name]);
    } else {
      const number = props.checkedNames.indexOf(props.name);
      props.setCheckedNames(
        props.checkedNames.filter((_, index) => index !== number)
      );
    }
  };

  return (
    <>
      <StyledRowFragment className="row__fragment">
        <input
          type="checkbox"
          className="row__fragment--checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </StyledRowFragment>
      <StyledRowFragment className="row__fragment">
        <span>{props.name}</span>
        <span className="row__fragment--species">{speciesName}</span>
      </StyledRowFragment>
      <StyledRowFragment className="row__fragment">
        {props.born}
      </StyledRowFragment>
      <StyledRowFragment className="row__fragment">
        {!!props.isHeaderRow ? props.homeworld : planetName}
      </StyledRowFragment>
      <StyledRowFragment className="row__fragment">
        {!!props.isHeaderRow ? (
          props.vehiclesAndStarships
        ) : (
          <>
            <span>{firstMachineName}</span>
            <span>{secondMachineName}</span>
          </>
        )}
      </StyledRowFragment>
      <StyledRowFragment className="row__fragment">
        {!!props.isHeaderRow ? (
          <>{"Status"}</>
        ) : !!props.status ? (
          <>✔️ Active</>
        ) : (
          <>❌Deactivated</>
        )}
      </StyledRowFragment>
    </>
  );
};
