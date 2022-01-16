import styled from "styled-components";
import "./button-styles.css";

export const Button = (props) => {
  const StyledButton = styled.button`
    background: ${props.background};
  `;

  const checkActivationStatus = () => {
    props.setActivePeopleArray(
      props.peopleArray.filter((person) => {
        return props.checkedNames.includes(person.name);
      })
    );
  };

  const checkRemoveStatus = () => {
    props.setRemovePeopleArray(
      props.peopleArray.filter((person) => {
        return props.checkedNames.includes(person.name);
      })
    );
  };

  const handleClick = () => {
    if (props.text === "Deactivate characteres") {
      checkActivationStatus();
    } else if (props.text === "Remove characteres") {
      checkRemoveStatus();
      props.setCheckOverride(true);
    }
  };

  return (
    <StyledButton className={`button`} onClick={handleClick}>
      <span className={"button__sign"}>{props.sign}</span>
      <span className={"button__text"}>{props.text}</span>
    </StyledButton>
  );
};
