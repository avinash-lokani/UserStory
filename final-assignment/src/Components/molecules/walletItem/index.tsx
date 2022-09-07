import { Grid, Typography } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icons";

export interface WalletItemProps {
  date: string;
  coinName: string;
  donar: string;
  type: string;
  amount: number;
  change: string;
}

function WalletItem(props: WalletItemProps) {
  return (
    <Grid container>
      <Grid item>
        <Typography>{props.date}</Typography>
        <Icon imgSrc={""} />
        <Typography>{props.coinName}</Typography>
        <Typography>{props.donar}</Typography>
        <Typography>{props.type}</Typography>
      </Grid>
      <Grid item>
        <Typography>{props.amount}</Typography>
        <Typography>{props.change}</Typography>
      </Grid>
    </Grid>
  );
}

export default WalletItem;
