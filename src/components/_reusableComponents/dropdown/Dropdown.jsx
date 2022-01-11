import "./dropdown-styles.css";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

export const Dropdown = (props) => {
  const [options] = useState(props.optionsArray);

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedItem);
  };

  const onRemove = (selectedList, removedItem) => {
    console.log(removedItem);
  };

  const style = {
    searchBox: {
      border: "none",
      color: "#484f53",
    },
    chips: {
      // To change css chips(Selected options)
      background: "red",
    },
  };

  return (
    <div className="dropdown">
      <Multiselect
        placeholder={props.placeholder}
        singleSelect={props.isSingleSelect}
        options={options}
        displayValue="name"
        onSelect={onSelect}
        onRemove={onRemove}
        style={style}
        hidePlaceholder={true}
        showArrow={true}
        showCheckbox={true}
      />
    </div>
  );
};
