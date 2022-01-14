import "./row-styles.css";

export const Row = (props) => {
  return (
    <>
      <div className="row__fragment">
        <input type="checkbox" />
      </div>
      <div className="row__fragment">{props.name}</div>
      <div className="row__fragment">{props.born}</div>
      <div className="row__fragment">{props.homeworld}</div>
      <div className="row__fragment">{props.vehicles}</div>
      <div className="row__fragment">{props.status}</div>
    </>
  );
};
