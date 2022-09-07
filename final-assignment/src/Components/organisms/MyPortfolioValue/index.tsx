import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TimeTabs from "../../molecules/TimeTabs";

function index() {
  return (
    <Grid container>
      <Typography>My Portfolio value</Typography>
      <Grid item>
        <Typography>Total investments</Typography>
        <TimeTabs />
      </Grid>
      <Grid item>{/*graph*/}</Grid>
      <Grid item>
        <Typography>10 coins (3 active)</Typography>
        <Box>{/* coin buttons */}</Box>
      </Grid>
    </Grid>
  );
}

export default index;
