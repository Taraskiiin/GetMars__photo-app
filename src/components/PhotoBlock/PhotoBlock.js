import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PhotoItem from "./PhotoItem"

export default function PhotoBlock({listPhotos}) {
  return (
    <div className="photos__block">
      <Carousel>
      {listPhotos.photos.map(el => <PhotoItem {...el}/>)}
      </Carousel>
    </div>   
  );
}
