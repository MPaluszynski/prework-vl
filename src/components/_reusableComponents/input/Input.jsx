import "./input-styles.css";
import { Icon } from "../Icon";

export const Input = () => {
  return (
    <div className="input">
      {" "}
      <input
        className="input__text"
        type="text"
        placeholder="Search..."
        // onChange={(e) => updateField(e.target.value)}
      />
      <Icon iconName={"AiOutlineSearch"} className={"input__icon"} />
    </div>
  );
};
