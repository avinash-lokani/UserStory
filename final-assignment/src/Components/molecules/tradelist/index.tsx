import { Grid } from "@mui/material";
import React from "react";
import TradeItem from "../../atoms/tradeItem";

function TradeList(TradeItemList: Array) {
  return (
    <Grid container>
      {TradeItemList.map((item) => {
        return (
          <TradeItem
            imgSrc={item.imgSrc}
            coinName={item.coinName}
            cost={item.cost}
            shortName={item.shortForm}
            change={item.change}
            marketCap={item.marketCap}
            watch={item.watch}
          />
        );
      })}
    </Grid>
  );
}

export default TradeList;
