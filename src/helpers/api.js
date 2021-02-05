import axios from "axios";

export const getPhotos = (apiKey, rover, camera, sol) => {
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&&api_key=${apiKey}`)
};
