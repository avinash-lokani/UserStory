import { Grid, Typography } from "@mui/material";
import React from "react";

export interface WatchListProps {
  coinName: string;
  cost: number;
  time: number;
  OnClick: () => void;
}

function WatchListItem(props: WatchListProps) {
  return (
    <Grid container>
      <Grid item onClick={props.OnClick}>
        <Typography>{props.coinName}</Typography>
        <Typography>{props.cost}</Typography>
        <Typography>{props.time}</Typography>
      </Grid>
      <Grid item>{/* Graph part */}</Grid>
    </Grid>
  );
}

export default WatchListItem;
