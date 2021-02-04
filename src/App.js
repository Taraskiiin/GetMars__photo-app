import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Container from "@material-ui/core/Container";

import RoverDropdown from "./components/RoverDropdown/RoverDropdown";
import CameraDropdown from "./components/CameraDropdown/CameraDropdown";
import SolNumber from "./components/SolNumber/SolNumber";

const App = () => {
  const [listPhotos, setListPhotos] = useState(null);
  const [rover, setRover] = useState("");
  const [camera, setCamera] = useState("");
  const [sol, setSol] = useState("");
  let camerasList = [];

  if (rover === "curiosity") {
    camerasList = [];
    camerasList.push(
      {
        id: 1,
        name: "fhaz",
        fullname: "Front Hazard Avoidance Camera",
      },
      {
        id: 2,
        name: "rhaz",
        fullname: "Rear Hazard Avoidance Camera",
      },
      { 
        id: 3,
        name: "mast",
        fullname: "Mast Camera",
      },
      {
        id: 4,
        name: "chemcam",
        fullname: "Chemistry and Camera Complex",
      },
      {
        id: 5,
        name: "mahli",
        fullname: "Mars Hand Lens Imager",
      },
      {
        id: 6,
        name: "mardi",
        fullname: "Mars Descent Imager",
      },
      {
        id: 7,
        name: "navcam",
        fullname: "Navigation Camera",
      }
    );
  } else {
    camerasList = [];
    camerasList.push(
      {
        id: 1,
        name: "fhaz",
        fullname: "Front Hazard Avoidance Camera",
      },
      {
        id: 2,
        name: "rhaz",
        fullname: "Rear Hazard Avoidance Camera",
      },
      {
        id: 3,
        name: "navcam",
        fullname: "Navigation Camera",
      },
      {
        id: 4,
        name: "pancam",
        fullname: "Panoramic Camera",
      },
      {
        id: 5,
        name: "minites",
        fullname: "Miniature Thermal",
      }
    );
  }
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=xPuKdfjH5ud7bdVxmhtgn9iLEyHqxcNFpGoHtyJe`
      )
      .then(({ data }) => {
        setListPhotos(data);
      });
  }, []);
  return (
    <div className="App">
      <Container maxWidth="sm">
        <div className="form__block">
          <RoverDropdown rover={rover} setRover={setRover} />
          <CameraDropdown setCamera={setCamera} camerasList={camerasList} />
          <SolNumber setSol={setSol} />
          <button className="get__btn" onClick={() => console.log(rover, sol, camera)}>Get photos</button>
        </div>
      </Container>
    </div>
  );
};

export default App;
