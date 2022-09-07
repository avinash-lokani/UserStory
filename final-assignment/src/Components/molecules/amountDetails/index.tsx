import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";
export interface AmountDetailsProps {
  imgSrc: string;
  price: string;
  paymentMethod: string;
  DeliveryFees: string;
  Deposit: string;
}
function AmountDetails(props: AmountDetailsProps) {
  return (
    <Grid container>
      <Grid item>
        <Typography>You are buying</Typography>
        <Typography>{props.price}</Typography>
      </Grid>
      <Grid item>
        <Typography>{props.paymentMethod}</Typography>
        <Typography>{props.DeliveryFees}</Typography>
        <Typography>{props.Deposit}</Typography>
      </Grid>
      <Grid item>
        <Typography>Total</Typography>
        <Button style={{}} />
      </Grid>
    </Grid>
  );
}

export default AmountDetails;
