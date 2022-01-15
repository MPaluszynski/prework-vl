import "./data-styles.css";
import { Row } from "../_reusableComponents/row/Row.jsx";

export const Data = (props) => {
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
        <Row
          name={props.peopleArray[0].name}
          born={props.peopleArray[0].birth_year}
          homeworld={props.peopleArray[0].homeworld}
          vehicles={`${props.peopleArray[0].vehicles[0]}, ${props.peopleArray[0].vehicles[1]}`}
          status={"Status"}
        />
      </div>
    </div>
  );
};
