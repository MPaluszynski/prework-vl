import "./data-styles.css";
import { Row } from "../_reusableComponents/row/Row.jsx";

export const Data = (props) => {
  const renderArray = props.peopleArray.map((person, index) => {
    return (
      <Row
        key={index}
        name={person.name}
        born={person.birth_year}
        homeworld={person.homeworld}
        vehicles={`${person.vehicles[0]}, ${person.vehicles[1]}`}
        status={"Active"}
      />
    );
  });

  return (
    <div className="data">
      <div className="data__table">
        <Row
          name={"Name"}
          born={"Born"}
          homeworld={"Homeworld"}
          vehicles={"Vehicles and Starships"}
          status={"Status"}
        />
        {renderArray}
      </div>
    </div>
  );
};
