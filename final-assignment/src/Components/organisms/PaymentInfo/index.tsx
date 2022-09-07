import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icons";

// paymentinfo props

function PaymentInfo(props: PaymentInfoProps) {
  return (
    <Grid container>
      <Grid item>
        <Icon imgSrc={""} />
        <Typography>{props.cost}</Typography>
        <Typography>{props.purchasedesc}</Typography>
        <Button style={{}} />
        {/* Buy crypto*/}
        <Button style={{}} />
        {/* Go to USD coin*/}
      </Grid>
    </Grid>
  );
}

export default PaymentInfo;
