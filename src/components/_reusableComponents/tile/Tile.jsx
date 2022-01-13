import "./tile-styles.css";
import styled from "styled-components";

export const Tile = (props) => {
  const StyledTile = styled.div`
    background: ${props.background};
    border: ${props.border};
    box-shadow: ${props.shadow};
  `;
  return <StyledTile className="tile">{props.text}</StyledTile>;
};
