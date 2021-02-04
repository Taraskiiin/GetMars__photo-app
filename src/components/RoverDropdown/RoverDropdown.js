import React from "react";

import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

export default function RoverDropdown({ setRover }) {
  const handleChange = (e) => setRover(e.target.value);
  return (
    <FormControl>
      <InputLabel>Select one of options</InputLabel>
      <Select onChange={handleChange}>
        <MenuItem value={"curiosity"}>Curiosity</MenuItem>
        <MenuItem value={"opportunity"}>Opportunity</MenuItem>
        <MenuItem value={"spirit"}>Spirit</MenuItem>
      </Select>
    </FormControl>
  );
}
