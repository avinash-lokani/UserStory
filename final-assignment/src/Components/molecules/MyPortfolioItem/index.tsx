import { Grid, Typography } from "@mui/material";
import React from "react";
export interface MyPortfolioItemProps {
  imgSrc: string;
  coinName: string;
  price: string;
  shortForm: string;
  change: string;
}
function MyPortfolioItem(props: MyPortfolioItemProps) {
  return (
    <Grid container>
      <Grid item>
        <img src={props.imgSrc} alt="logo" />
        <Typography>{props.coinName}</Typography>
        <Typography>{props.shortForm}</Typography>
      </Grid>
      <Grid item>
        <Typography>{props.price}</Typography>
        <Typography>{props.change}</Typography>
      </Grid>
    </Grid>
  );
}

export default MyPortfolioItem;
