import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

const nameMapping = {
  Ai: AiIcons,
  Bi: BiIcons,
};

export const Icon = (props) => {
  const { iconName, className } = props;

  const Icon = nameMapping[iconName.slice(0, 2)][iconName];

  return (
    <div className={className} onClick={props.onClick}>
      <Icon />
    </div>
  );
};
