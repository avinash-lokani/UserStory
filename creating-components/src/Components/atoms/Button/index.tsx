import { ButtonGroup } from "@mui/material";
import React from "react";

export interface ButtonProps {
  style: React.CSSProperties;
}

function Button(props: ButtonProps) {
  return <ButtonGroup sx={props.style} />;
}

export default Button;
