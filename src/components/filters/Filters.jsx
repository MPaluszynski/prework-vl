import "./filters-styles.css";
import { Input } from "../_reusableComponents/input/Input";
import { Dropdown } from "../_reusableComponents/dropdown/Dropdown";
import { Button } from "../_reusableComponents/button/Button";

export const Filters = () => {
  //
  // Do usunięcia po ogarnięciu fetchowania
  const speciesArray = [
    { name: "Human", id: 1 },
    { name: "Droid", id: 2 },
    { name: "Wookie", id: 3 },
    { name: "Rodian", id: 4 },
    { name: "Hutt", id: 5 },
    { name: "Yoda's species", id: 6 },
  ];
  const homeworldsArray = [
    { name: "Tatooine", id: 1 },
    { name: "Alderaan", id: 2 },
    { name: "Yavin IV", id: 3 },
  ];

  const statusArray = [
    { name: "Active", id: 1 },
    { name: "Deactivated", id: 2 },
  ];

  return (
    <div className="filters">
      <div className="filters__inputs">
        <Input />
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
        />
      </div>
      <div className="filters__buttons">
        <Button
          text={"Deactivate characteres"}
          background={"#0088da"}
          sign={"⛔"}
        />
        <Button
          text={"Remove characteres"}
          background={"#bc2626"}
          sign={"➖"}
        />
      </div>
    </div>
  );
};
