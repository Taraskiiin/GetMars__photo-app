import React from "react";

import { Select, FormControl, MenuItem } from "@material-ui/core";

export default function CameraDropdown({ setCamera, camerasList }) {
  const handleChange = (e) => setCamera(e.target.value);
  return (
    <FormControl>
      <Select onChange={handleChange}>
        {camerasList.map((camera) => (
           <MenuItem value={camera.name}>{camera.fullname}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
