import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import WalletItem from "../../molecules/walletItem";

function WalletList() {
  useEffect(() => {
    // axios call to get the list of items in wallet
  });

  return (
    <Grid container>
      {walletlist.map(() => {
        return (
          <Grid item>
            <WalletItem
              date={""}
              coinName={""}
              donar={""}
              type={""}
              amount={0}
              change={""}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default WalletList;
