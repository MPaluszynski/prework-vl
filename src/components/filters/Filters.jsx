import "./filters-styles.css";
import { Input } from "../_reusableComponents/input/Input";
import { Dropdown } from "../_reusableComponents/dropdown/Dropdown";
// import { SingleSelect } from "../_reusableComponents/singleSelect/SingleSelect";
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
      {/* <SingleSelect placeholder={"Status"}  /> */}
    </div>
  );
};
