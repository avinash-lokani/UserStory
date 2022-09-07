import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Banner from "../../atoms/Banner";
import Icon from "../../atoms/icons";
import SearchBar from "../../molecules/SearchBar";

function Header() {
  var keyword = "";

  const handleChange = () => {
    // handle on change function
    keyword = "";
  };

  useEffect(
    () => {
      // axios call to get the whole data

      const search = () => {
        // filter data
      };
    },
    [
      /* filtered data on variable keyword */
    ]
  );

  const handleExploreClick = () => {
    // Expand Explore tab
  };

  const handleMyLibraryClick = () => {
    // navigate to my library
  };
  const handleHighlightsClick = () => {
    // navigate to highlights
  };
  const handleAccountClick = () => {
    // handle account tab
  };
  return (
    <Grid container>
      <Grid item>
        <Banner />
      </Grid>
      <Grid item>
        <Icon imgSrc={""} />
        <SearchBar onChange={handleChange} />
      </Grid>
      <Grid item>
        <div style={{ display: "flex" }}>
          <Typography onClick={handleExploreClick}>Explore</Typography>
          <Icon imgSrc="" />
        </div>
      </Grid>
      <Grid item>
        <Typography onClick={handleMyLibraryClick}>MyLibrary</Typography>
      </Grid>
      <Grid item>
        <Typography onClick={handleHighlightsClick}>Highlights</Typography>
      </Grid>
      <Grid item>
        <div style={{ display: "flex" }}>
          <Typography onClick={handleAccountClick}>Account</Typography>
          <Icon imgSrc="" />
        </div>
      </Grid>
    </Grid>
  );
}

export default Header;
