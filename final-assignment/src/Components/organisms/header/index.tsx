import { Grid } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icons";

function Header() {
  return (
    <Grid container>
      <Grid item>{props.heading}</Grid>
      <Grid item>
        <Button style={{}} /> {/* Buy */}
        <Button style={{}} /> {/* sell */}
      </Grid>
      <Grid item>{/* Avatar with dropdown icon */}</Grid>
    </Grid>
  );
}

export default Header;
