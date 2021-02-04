import React, { useState } from "react";
import "./App.css";

import Container from "@material-ui/core/Container";

import RoverDropdown from "./components/RoverDropdown/RoverDropdown";
import CameraDropdown from "./components/CameraDropdown/CameraDropdown";
import SolNumber from "./components/SolNumber/SolNumber";
import PhotoBlock from "./components/PhotoBlock/PhotoBlock";

const App = () => {
  const [listPhotos, setListPhotos] = useState(null);
  const [rover, setRover] = useState("");
  const [camera, setCamera] = useState("");
  const [sol, setSol] = useState("");
  const [readyToGet, setReadyToGet] = useState(false);
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

  if (sol < 1) {
    setSol(1);
  } else if (sol > 1000) {
    setSol(1000);
  }

  const checkToReady = () => {
    if (rover !== "" && camera !== "" && sol !== "") {
      setReadyToGet(true);
    } else {
      alert("fields must be filled!");
    }
  };
  return (
    <div className="App">
      <Container maxWidth="sm">
        {readyToGet ? (
          <PhotoBlock rover={rover} camera={camera} sol={sol} />
        ) : (
          <div className="form__block">
            <h1 className="app__title">MARS ROVER PHOTOS</h1>
            <RoverDropdown rover={rover} setRover={setRover} />
            <CameraDropdown setCamera={setCamera} camerasList={camerasList} />
            <SolNumber setSol={setSol} />
            <button className="get__btn" onClick={() => checkToReady()}>
              Get photos
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default App;
