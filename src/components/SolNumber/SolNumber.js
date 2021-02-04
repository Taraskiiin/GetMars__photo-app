import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SolNumber({ setSol }) {
  const getData = (e) => setSol(e.target.value);
  return (
    <TextField
      id="standard-basic"
      label="Enter sol"
      type="number"
      InputProps={{ inputProps: { min: 1, max: 1000 }}}
      min={1}
      max={1000}
      onChange={getData}
    />
  );
}
