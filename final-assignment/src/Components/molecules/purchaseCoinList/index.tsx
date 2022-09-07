import { Grid } from "@mui/material";
import React from "react";
import PurchaseCoinItem from "../../atoms/PurchaseCoinItem";

function PurchaseCoinList(PurchaseCoinList: Array) {
  return (
    <Grid container>
      {PurchaseCoinList.map((item) => {
        return (
          <PurchaseCoinItem
            imgSrc={item.imgSrc}
            coinName={item.coinName}
            cost={item.cost}
          />
        );
      })}
    </Grid>
  );
}

export default PurchaseCoinList;
