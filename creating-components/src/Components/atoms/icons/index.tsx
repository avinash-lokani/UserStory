import React from "react";
export interface IconProps {
  imgSrc: string;
}
function Icon(props: IconProps) {
  return <img src={props.imgSrc} alt="icon" />;
}

export default Icon;
