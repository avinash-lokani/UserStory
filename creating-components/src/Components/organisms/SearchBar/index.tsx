import { InputAdornment, TextField } from "@mui/material";
import React, { useEffect } from "react";
import Icon from "../../atoms/icons";

function SearchBar() {
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

  return (
    <TextField
      placeholder=""
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon imgSrc={""} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
