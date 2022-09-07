import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import MyPortfolioItem from "../../molecules/MyPortfolioItem";
import WatchListItem from "../../molecules/WatchListItem";

function MyPortfolio() {
  useEffect(() => {
    // axios call to get the portfolio, wallet, recent transactions  data
  });

  return (
    <Grid container>
      <Grid item>
        <Typography>My Portfolio</Typography>
        {myPortfoliodata.map(() => {
          return <MyPortfolioItem imgSrc={""} coinName={""} price={""} shortForm={""} change={""} />;
        })}
        <Typography>Total Balance</Typography>
      </Grid>
      <Grid item>
        <Typography>MyWallets</Typography>
        mywalletsdata.map(() => {
          return(
            <WatchListItem coinName={""} cost={0} time={0}/>
          )
        })
      </Grid>
      <Grid item>
        <Typography>Recent Transactions</Typography>
        {/*recent transactions */}
      </Grid>
    </Grid>
  );
}

export default MyPortfolio;
