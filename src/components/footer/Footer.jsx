import "./footer-styles.css";
import { Tile } from "../_reusableComponents/tile/Tile";
import { useState } from "react";

export const Footer = (props) => {
  const [firstElement, setFirstElement] = useState(1);
  const [currentElement, setCurrentElement] = useState(1);

  return (
    <div className="footer">
      <Tile
        text={"<"}
        currentElement={currentElement}
        firstElement={firstElement}
        lastElement={props.lastElement}
        setCurrentElement={setCurrentElement}
        setFirstElement={setFirstElement}
      />
      <Tile
        text={firstElement}
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
      />
      <Tile
        text={firstElement + 1}
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
      />
      <Tile
        text={firstElement + 2}
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
      />
      <Tile text={"..."} />
      <Tile
        text={props.lastElement - 2}
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
      />
      <Tile
        text={props.lastElement - 1}
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
      />
      <Tile
        text={props.lastElement}
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
      />
      <Tile
        text={">"}
        currentElement={currentElement}
        firstElement={firstElement}
        lastElement={props.lastElement}
        setCurrentElement={setCurrentElement}
        setFirstElement={setFirstElement}
      />
    </div>
  );
};
