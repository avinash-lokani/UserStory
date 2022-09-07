import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";

function Footer() {
  return (
    <Grid container>
      <Grid item>
        <Typography>Dashboard</Typography>
      </Grid>
      <Grid item>
        <Typography>Careers</Typography>
      </Grid>
      <Grid item>
        <Typography>Legal&Privacy</Typography>
      </Grid>
      <Grid item>
        <Typography>@2021 Minet</Typography>
      </Grid>
      {/*need help button} */}
      <Button style={{}} />
    </Grid>
  );
}

export default Footer;
