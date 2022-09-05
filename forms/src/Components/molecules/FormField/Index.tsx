import React, { HTMLInputTypeAttribute, ReactElement } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "../../atoms/Icon";

export interface FieldTypes {
  endicon: string;
  fieldType: HTMLInputTypeAttribute;
  label: string;
  childern?: ReactElement;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = (props: FieldTypes) => {
  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Icon icon={props.endicon} alt={props.label}></Icon>
          </InputAdornment>
        ),
      }}
      disabled={props.disabled}
      label={props.label}
      type={props.fieldType}
      onChange={props.onChange}
    >
      {props.childern}
    </TextField>
  );
};

export default FormField;
