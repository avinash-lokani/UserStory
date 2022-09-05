import React from "react";

export interface IconProps {
  icon: string;
  alt: string;
}

const Icon = (props: IconProps) => {
  return (
    <div>
      <img src={props.icon} alt={props.alt} />
    </div>
  );
};

export default Icon;
