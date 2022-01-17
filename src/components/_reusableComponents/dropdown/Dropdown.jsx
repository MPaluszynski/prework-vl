import "./dropdown-styles.css";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

export const Dropdown = (props) => {
  const [options] = useState(props.optionsArray);

  const filterByStatus = (selectedItem) => {
    props.setGlobalStatus(selectedItem.name);
  };

  const onSelect = (selectedList, selectedItem) => {
    if (props.placeholder === "Status") {
      filterByStatus(selectedItem);
    }
  };

  const onRemove = (selectedList, removedItem) => {
    console.log(removedItem);
  };

  const style = {
    inputField: {
      margin: "0",
      width: "100%",
      height: "100%",
      display: "flex",
    },
    searchBox: {
      border: "none",
      color: "#484f53",
      display: !!props.isSingleSelect ? "flex" : "",
      aliginItems: !!props.isSingleSelect ? "center" : "",
    },
    chips: !!props.isSingleSelect
      ? {
          margin: "0",
          width: "100%",
          height: "100%",
          fontSize: "1.1em",
        }
      : {},
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
