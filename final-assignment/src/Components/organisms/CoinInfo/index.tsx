import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Icon from "../../atoms/Icons";

// props

function index(props: CoinInfoProps) {
  useEffect(() => {
    // axios call get the coin data
  });

  return (
    <Grid container>
      <Grid item>
        <Icon imgSrc={""} />
        <Typography>{coinData.coinName}</Typography>
        <Typography>{coinData.shortForm}</Typography>
        <Typography>{coinData.marketcap}</Typography>
        <Typography>{coinData.supply}</Typography>
        <Typography>{coinData.addedToWatchList}</Typography>
      </Grid>
      <Grid item>
        <Typography>current value</Typography>
        <Typography>{coinData.cost}</Typography>
        {/* graph */}
      </Grid>
      <Grid item>
        <Grid>
          <Typography>About {coinData.coin}</Typography>
          <Typography>{coinData.description}</Typography>
        </Grid>
        <Grid>
          <Typography>Resources</Typography>
          {/* links */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default index;
