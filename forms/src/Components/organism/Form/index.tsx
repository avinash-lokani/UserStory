import React, { useEffect, useState } from "react";
import FormField from "../../molecules/FormField/Index";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MaleIcon from "../../../icons/male.svg";
import FemaleIcon from "../../../icons/female.svg";
import Child from "../../../icons/child.svg";
import Person from "../../../icons/person.svg";
import Age from "../../../icons/age.svg";
import Icon from "../../atoms/Icon";

const Form = () => {
  const [disableRest, setDisableRest] = useState<boolean>(true);

  const [age, setAge] = useState<string>(Age);

  const [genderIcon, setGenderIcon] = useState<string>(MaleIcon);
  const [gender, setGender] = useState<string>("male");
  const hangleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(event.target.value) >= 18) {
      setAge(Person);
    } else if (parseInt(event.target.value) >= 5) {
      setAge(Child);
    } else {
      setAge(Age);
    }
  };

  const handleGenderChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    if (gender === "male") {
      setGender("female");
      setGenderIcon(FemaleIcon);
    } else {
      setGender("male");
      setGenderIcon(MaleIcon);
    }
  };

  useEffect(() => {}, [genderIcon, age, gender]);

  const genders = ["male", "female"];

  return (
    <div>
      <FormField
        endicon={Person}
        fieldType={"text"}
        label={"Name"}
        disabled={false}
        onChange={() => setDisableRest(!disableRest)}
      />

      {disableRest ? null : (
        <div>
          <FormField
            endicon={age}
            fieldType={"number"}
            label={"Age"}
            disabled={disableRest}
            onChange={hangleAgeChange}
          />
          <div style={{ marginTop: "10px" }}>
            <FormControl>
              <InputLabel id="select">Gender</InputLabel>
              <Select
                labelId="select"
                id="demo-simple-select"
                value={gender}
                label={"select your gender"}
                onChange={handleGenderChange}
              >
                {genders.map((obj, idx) => {
                  return (
                    <MenuItem key={idx} value={obj}>
                      {obj}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <span>
              <Icon icon={genderIcon} alt={"gendericon"} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
