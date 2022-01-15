import "./footer-styles.css";
import { Tile } from "../_reusableComponents/tile/Tile";
import { useState } from "react";

export const Footer = (props) => {
  const [firstElement, setFirstElement] = useState(1);
  // const [currentElement, setCurrentElement] = useState(1);

  return (
    <div className="footer">
      <Tile
        text={"<"}
        currentElement={props.currentElement}
        firstElement={firstElement}
        lastElement={props.lastElement}
        setCurrentElement={props.setCurrentElement}
        setFirstElement={setFirstElement}
        page={props.page}
        setPage={props.setPage}
      />
      <Tile
        text={firstElement}
        currentElement={props.currentElement}
        setCurrentElement={props.setCurrentElement}
        page={props.page}
        setPage={props.setPage}
      />
      <Tile
        text={firstElement + 1}
        currentElement={props.currentElement}
        setCurrentElement={props.setCurrentElement}
        page={props.page}
        setPage={props.setPage}
      />
      <Tile
        text={firstElement + 2}
        currentElement={props.currentElement}
        setCurrentElement={props.setCurrentElement}
        page={props.page}
        setPage={props.setPage}
      />
      <Tile text={"..."} />
      <Tile
        text={props.lastElement - 2}
        currentElement={props.currentElement}
        setCurrentElement={props.setCurrentElement}
        page={props.page}
        setPage={props.setPage}
      />
      <Tile
        text={props.lastElement - 1}
        currentElement={props.currentElement}
        setCurrentElement={props.setCurrentElement}
        page={props.page}
        setPage={props.setPage}
      />
      <Tile
        text={props.lastElement}
        currentElement={props.currentElement}
        setCurrentElement={props.setCurrentElement}
        page={props.page}
        setPage={props.setPage}
      />
      <Tile
        text={">"}
        currentElement={props.currentElement}
        firstElement={firstElement}
        lastElement={props.lastElement}
        setCurrentElement={props.setCurrentElement}
        setFirstElement={setFirstElement}
        page={props.page}
        setPage={props.setPage}
      />
    </div>
  );
};
