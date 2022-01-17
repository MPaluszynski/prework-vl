import "./filters-styles.css";
import { Input } from "../_reusableComponents/input/Input";
import { Dropdown } from "../_reusableComponents/dropdown/Dropdown";
import { Button } from "../_reusableComponents/button/Button";

import {
  statusArray,
  speciesArray,
  homeworldsArray,
} from "./../../data/arrays.js";

export const Filters = (props) => {
  return (
    <div className="filters">
      <div className="filters__inputs">
        <Input setSearchedInput={props.setSearchedInput} />
        <Dropdown
          placeholder={"Species"}
          optionsArray={speciesArray}
          isSingleSelect={false}
        />
        <Dropdown
          placeholder={"Homeworlds"}
          optionsArray={homeworldsArray}
          isSingleSelect={false}
        />
        <Dropdown
          placeholder={"Status"}
          optionsArray={statusArray}
          isSingleSelect={true}
          setGlobalStatus={props.setGlobalStatus}
        />
      </div>
      <div className="filters__buttons">
        <Button
          text={"Deactivate characteres"}
          background={"#0088da"}
          sign={"⛔"}
          checkedNames={props.checkedNames}
          peopleArray={props.peopleArray}
          setActivePeopleArray={props.setActivePeopleArray}
          setRemovePeopleArray={props.setRemovePeopleArray}
        />
        <Button
          text={"Remove characteres"}
          background={"#bc2626"}
          sign={"➖"}
          checkedNames={props.checkedNames}
          peopleArray={props.peopleArray}
          setActivePeopleArray={props.setActivePeopleArray}
          setRemovePeopleArray={props.setRemovePeopleArray}
          setCheckOverride={props.setCheckOverride}
        />
      </div>
    </div>
  );
};
