import React from "react";

import { Select, FormControl } from "@material-ui/core";
import CameraItem from "./CameraItem";

export default function CameraDropdown({ setCamera, camerasList }) {
  const handleChange = (e) => setCamera(e.target.value);
  return (
    <FormControl>
      <Select onChange={handleChange}>
        {camerasList.map((camera, i) => (
          <CameraItem key={i} {...camera} />
        ))}
      </Select>
    </FormControl>
  );
}
