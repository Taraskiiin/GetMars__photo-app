import React from "react";

import { Select, FormControl, MenuItem, InputLabel } from "@material-ui/core";

export default function CameraDropdown({ setCamera, camerasList }) {
  const handleChange = (e) => setCamera(e.target.value);
  return (
    <FormControl>
      <InputLabel>Select one of options</InputLabel>
      <Select onChange={handleChange}>
        {camerasList.map((camera) => (
           <MenuItem key={camera.id} value={camera.name}>{camera.fullname}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
