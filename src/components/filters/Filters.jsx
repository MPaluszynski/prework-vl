import "./filters-styles.css";
import { Input } from "../_reusableComponents/input/Input";
import { MultiSelect } from "../_reusableComponents/multiSelect/MultiSelect";
export const Filters = () => {
  //
  // Do usunięcia po ogarnięciu fetchowania
  const speciesArray = [
    { name: "Tatooine", id: 1 },
    { name: "Alderaan", id: 2 },
    { name: "Yavin IV", id: 3 },
  ];
  const homeworldsArray = [
    { name: "Tatooine", id: 1 },
    { name: "Alderaan", id: 2 },
    { name: "Yavin IV", id: 3 },
  ];

  return (
    <div className="filters">
      <Input />
      <MultiSelect placeholder={"Species"} optionsArray={speciesArray} />
      <MultiSelect placeholder={"Homeworlds"} optionsArray={homeworldsArray} />
    </div>
  );
};
