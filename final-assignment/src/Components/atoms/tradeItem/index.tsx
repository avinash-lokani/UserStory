import { Grid, Typography } from "@mui/material";
import React from "react";
import Icon from "../Icons";
export interface TradeItemProps {
  imgSrc: string;
  coinName: string;
  cost: string;
  shortName: string;
  change: string;
  marketCap: string;
  watch: boolean;
}
function TradeItem(props: TradeItemProps) {
  return (
    <Grid container>
      <Grid item>
        <img src={props.imgSrc} alt="logo" />
        <Typography>{props.coinName}</Typography>
        <Typography>{props.shortName}</Typography>
      </Grid>
      <Grid item>
        <Typography>{props.cost}</Typography>
      </Grid>
      <Grid item>{props.change}</Grid>
      <Grid item>{props.marketCap}</Grid>
      <Grid item>
        <Icon imgSrc={""} />
      </Grid>
    </Grid>
  );
}

export default TradeItem;
