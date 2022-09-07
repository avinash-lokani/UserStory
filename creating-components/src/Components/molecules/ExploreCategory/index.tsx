import { Typography } from "@mui/material";
import React, { MouseEventHandler } from "react";
import Icon from "../../atoms/icons";

export interface ExploreCategoryProps {
  iconImg: string;
  topicName: string;
  onClick: MouseEventHandler<HTMLImageElement>;
}

function ExploreCategory(props: ExploreCategoryProps) {
  return (
    <div>
      <Icon imgSrc={props.iconImg}></Icon>
      <Typography onClick={props.onClick}>{props.topicName}</Typography>
    </div>
  );
}

export default ExploreCategory;
