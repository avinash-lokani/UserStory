import { Grid, Typography } from "@mui/material";
import React from "react";
export interface PurchaseCoinItemProps {
  imgSrc: string;
  coinName: string;
  cost: string;
}
function PurchaseCoinItem(props: PurchaseCoinItemProps) {
  return (
    <Grid container>
      <img src={props.imgSrc} alt="logo" />
      <Typography>{props.coinName}</Typography>
      <Typography>{props.cost}</Typography>
    </Grid>
  );
}

export default PurchaseCoinItem;
