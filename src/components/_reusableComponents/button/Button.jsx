import styled from "styled-components";
import "./button-styles.css";

export const Button = (props) => {
  const StyledButton = styled.button`
    background: ${props.background};
  `;

  const handleClick = () => {
    props.setActivePeopleArray(
      props.peopleArray.filter((person) => {
        return props.checkedNames.includes(person.name);
      })
    );
  };

  return (
    <StyledButton className={`button`} onClick={handleClick}>
      <span className={"button__sign"}>{props.sign}</span>
      <span className={"button__text"}>{props.text}</span>
    </StyledButton>
  );
};
