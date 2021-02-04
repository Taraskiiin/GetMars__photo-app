import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

export default function PhotoBlock({ rover, camera, sol }) {
    const id = useRef();
  const [listPhotos, setListPhotos] = useState(null);
  const [photo, setPhoto] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=DEMO_KEY`
      )
      .then(({ data }) => {
        setListPhotos(data);
      });
  }, []);
  return (
    <div>
      <button className="get__btn" onClick={() => console.log(listPhotos, rover, camera, sol)}>
        Send nudes
      </button>
    </div>
  );
}
