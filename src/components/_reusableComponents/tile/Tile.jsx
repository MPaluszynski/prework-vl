import "./tile-styles.css";
import styled from "styled-components";
// import { useState } from "react";

export const Tile = (props) => {
  const currentTileStyle = {
    background: "#EEF1F5;",
    border: "1px solid #BAC6D8;",
    shadow: "0px 2px 4px rgba(176, 194, 205, 0.3);",
  };

  const regularTileStyle = {
    background: "#ffffff;",
    border: "1px solid #bac6d8;",
    shadow: "0px 2px 4px #dde3ec",
  };

  const setCurrentElementValue = () => {
    if (props.text === ">" && props.currentElement < props.lastElement) {
      props.setCurrentElement(props.currentElement + 1);
      if (
        Number(props.currentElement) === Number(props.firstElement + 2) &&
        Number(props.currentElement) < Number(props.lastElement - 3)
      ) {
        props.setFirstElement(props.currentElement + 1);
      }
    } else if (props.text === "<" && props.currentElement > 1) {
      props.setCurrentElement(props.currentElement - 1);
      if (Number(props.currentElement) < Number(props.firstElement + 1)) {
        props.setFirstElement(props.currentElement - 3);
        props.setCurrentElement(props.currentElement - 1);
      }
    } else if (!isNaN(props.text)) {
      props.setCurrentElement(props.text);
    }
  };

  const setPageValue = () => {
    if (
      props.text === ">" &&
      props.currentElement < props.lastElement &&
      Number(props.currentElement) % 2 === 0
    ) {
      props.setPage(props.page + 1);
    } else if (
      props.text === "<" &&
      props.currentElement > 1 &&
      Number(props.currentElement) % 2 !== 0
    ) {
      props.setPage(props.page - 1);
    } else if (!isNaN(props.text)) {
      if (Number(props.text) % 2 === 0) {
        props.setPage(Number(props.text) / 2);
      } else {
        props.setPage(Math.ceil(Number(props.text) / 2));
      }
    }
  };

  const handleClick = () => {
    setCurrentElementValue();
    setPageValue();
  };

  const StyledTile = styled.div`
    background: ${Number(props.text) === Number(props.currentElement)
      ? currentTileStyle.background
      : props.text === "..."
      ? "transparent"
      : regularTileStyle.background};
    border: ${Number(props.text) === Number(props.currentElement)
      ? currentTileStyle.border
      : props.text === "..."
      ? "none"
      : regularTileStyle.border};
    box-shadow: ${Number(props.text) === Number(props.currentElement)
      ? currentTileStyle.shadow
      : props.text === "..."
      ? "none"
      : regularTileStyle.shadow};
  `;
  return (
    <StyledTile className="tile" onClick={handleClick}>
      {props.text}
    </StyledTile>
  );
};
