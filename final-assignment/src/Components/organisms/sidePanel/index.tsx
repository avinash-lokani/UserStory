import { Grid } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icons";

function index() {
  return (
    <Grid container>
      <Grid item>
        <Icon imgSrc={""} /> {/* icon 1 */}
      </Grid>
      <Grid item>
        <Icon imgSrc={""} /> {/* icon 2 */}
      </Grid>{" "}
      <Grid item>
        <Icon imgSrc={""} /> {/* icon 3 */}
      </Grid>{" "}
      <Grid item>
        <Icon imgSrc={""} /> {/* icon 4 */}
      </Grid>{" "}
      <Grid item>
        <Icon imgSrc={""} /> {/* icon 5 */}
      </Grid>{" "}
      <Grid item>
        <Icon imgSrc={""} /> {/* icon 6 */}
      </Grid>
    </Grid>
  );
}

export default index;
