import "./multi-select-styles.css";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

export const MultiSelect = (props) => {
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
  };

  return (
    <div className="multi-select">
      <Multiselect
        placeholder={props.placeholder}
        options={options}
        displayValue="name"
        onSelect={onSelect}
        onRemove={onRemove}
        style={style}
        hidePlaceholder={true}
        showArrow={true}
        showCheckbox={true}
        selectionLimit={4}
      />
    </div>
  );
};
