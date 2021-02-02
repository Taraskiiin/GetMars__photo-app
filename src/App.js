import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import { Dropdown } from 'semantic-ui-react';

const App = () => {
const [listPhotos, setListPhotos] = useState(null);
useEffect(() => {
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=xPuKdfjH5ud7bdVxmhtgn9iLEyHqxcNFpGoHtyJe`).then(({ data }) => {
  setListPhotos(data);
  });
}, []);
  return (
    <div className="App">
      {listPhotos ? 
        <button onClick={console.log(listPhotos)}></button>
    : `...Loading`}
    </div>
  );
}

export default App;
