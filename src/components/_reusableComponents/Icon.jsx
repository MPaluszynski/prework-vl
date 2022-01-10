import * as AiIcons from "react-icons/ai";

const nameMapping = {
  Ai: AiIcons,
};

export const Icon = (props) => {
  const { iconName, className } = props;

  const Icon = nameMapping[iconName.slice(0, 2)][iconName];

  return (
    <div className={className}>
      <Icon />
    </div>
  );
};
