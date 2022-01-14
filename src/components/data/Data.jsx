import "./data-styles.css";
import { Row } from "../_reusableComponents/row/Row.jsx";

export const Data = () => {
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
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
};
