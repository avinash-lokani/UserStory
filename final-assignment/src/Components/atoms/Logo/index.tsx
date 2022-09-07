import React from "react";
export interface LogoProps {
  imgSrc: string;
}
function Logo(props: LogoProps) {
  return <img src={props.imgSrc} alt="logo" />;
}

export default Logo;
