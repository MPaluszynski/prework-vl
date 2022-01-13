import "./button-styles.css";

export const Button = (props) => {
  return (
    <button className={`button ${props.background}`}>
      <span className={"button__sign"}>{props.sign}</span>
      <span className={"button__text"}>{props.text}</span>
    </button>
  );
};
