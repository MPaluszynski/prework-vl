import "./input-styles.css";
import { Icon } from "../Icon";
import { useState } from "react";

export const Input = (props) => {
  const [currentValue, setCurrentValue] = useState("");

  const updateCurrentValue = (value) => {
    setCurrentValue(value);
  };

  const updateSearchedInput = () => {
    props.setSearchedInput(currentValue);
  };

  return (
    <div className="input">
      {" "}
      <input
        className="input__text"
        type="text"
        placeholder="Search..."
        onChange={(e) => updateCurrentValue(e.target.value)}
      />
      <Icon
        iconName={"AiOutlineSearch"}
        className={"input__icon"}
        onClick={updateSearchedInput}
      />
    </div>
  );
};
