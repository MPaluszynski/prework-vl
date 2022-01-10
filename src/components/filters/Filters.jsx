import "./filters-styles.css";

export const Filters = () => {
  return (
    <div className="filters">
      {" "}
      <div>
        <input
          className="nav-input"
          type="text"
          placeholder="Znajdź usługę..."
          // onChange={(e) => updateField(e.target.value)}
        />
      </div>
    </div>
  );
};
