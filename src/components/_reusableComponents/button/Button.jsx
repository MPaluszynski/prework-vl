import styled from "styled-components";
import "./button-styles.css";

export const Button = (props) => {
  const StyledButton = styled.button`
    background: ${props.background};
  `;

  return (
    <StyledButton className={`button`}>
      <span className={"button__sign"}>{props.sign}</span>
      <span className={"button__text"}>{props.text}</span>
    </StyledButton>
  );
};
