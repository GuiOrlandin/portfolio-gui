import type { ComponentType } from "react";

export type IconProps = {
  size?: number;
  color?: string;
  className?: string;
};

export type TechnologyItem = {
  name: string;
  icon: ComponentType<IconProps>;
  color: string;
};

export type SoftSkillIcon = ComponentType<IconProps>;
