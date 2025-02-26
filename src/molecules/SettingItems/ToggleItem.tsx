import { type FC } from "react";

import Toggle from "molecules/Toggle";

interface ToggleItemProps {
  title?: string;
  description: string;
}

const ToggleItem: FC<ToggleItemProps> = ({ title, description }) => (
  <div className="flex flex-row justify-between gap-5">
    <div className="flex-1">
      <div className="bold-body">{title}</div>
      <div className="pt-0.5">{description}</div>
    </div>
    <Toggle />
  </div>
);

export default ToggleItem;
