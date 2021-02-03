import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import RoverDropdown from "./components/RoverDropdown/RoverDropdown";
import CameraDropdown from "./components/CameraDropdown/CameraDropdown";

const App = () => {
  const [listPhotos, setListPhotos] = useState(null);
  const [rover, setRover] = useState("curiosity");
  const [camera, setCamera] = useState("fhaz");
  let camerasList = [];

  if (rover === "curiosity") {
    camerasList = [];
    camerasList.push(
      {
        name: "fhaz",
        fullname: "Front Hazard Avoidance Camera",
      },
      {
        name: "rhaz",
        fullname: "Rear Hazard Avoidance Camera",
      },
      {
        name: "mast",
        fullname: "Mast Camera",
      },
      {
        name: "chemcam",
        fullname: "Chemistry and Camera Complex",
      },
      {
        name: "mahli",
        fullname: "Mars Hand Lens Imager",
      },
      {
        name: "mardi",
        fullname: "Mars Descent Imager",
      },
      {
        name: "navcam",
        fullname: "Navigation Camera",
      }
    );
  } else if (rover === "opportunity" || rover === "spirit") {
    camerasList = [];
    camerasList.push(
      {
        name: "fhaz",
        fullname: "Front Hazard Avoidance Camera",
      },
      {
        name: "rhaz",
        fullname: "Rear Hazard Avoidance Camera",
      },
      {
        name: "navcam",
        fullname: "Navigation Camera",
      },
      {
        name: "pancam",
        fullname: "Panoramic Camera",
      },
      {
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
      <RoverDropdown rover={rover} setRover={setRover}/>
      <CameraDropdown setCamera={setCamera} camera={camera} camerasList={camerasList}/>

      {listPhotos ? (
        <button onClick={() => console.log(listPhotos, camera)}></button>
      ) : (
        `...Loading`
      )}
    </div>
  );
};

export default App;
