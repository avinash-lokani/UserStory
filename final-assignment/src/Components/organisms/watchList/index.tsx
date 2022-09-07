import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import WatchListItem from "../../molecules/WatchListItem";

function WatchList() {
  useEffect(() => {
    // axios call to get the watchlist items
  });

  const handleClick = () => {};

  return (
    <Grid container>
      {WatchList.map(() => {
        return (
          <Grid item>
            <WatchListItem
              coinName={""}
              cost={0}
              time={0}
              onClick={handleClick}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default WatchList;
