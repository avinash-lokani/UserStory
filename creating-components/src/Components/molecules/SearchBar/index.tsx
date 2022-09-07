import { InputAdornment, TextField } from "@mui/material";
import React, { ChangeEventHandler } from "react";
import Icon from "../../atoms/icons";

export interface SearchBarProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function SearchBar(props: SearchBarProps) {
  return (
    <TextField
      placeholder=""
      onChange={props.onChange}
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
