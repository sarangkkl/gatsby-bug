import React from 'react';
import { slide1,slide2,slide3 } from '../../assets/images'

const Crousal = () => {
  return (
    <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
 
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={slide1} className="d-block w-100 custom__slider" alt="Mission Gharwapasi image one"/>
      
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={slide2} className="d-block w-100 custom__slider" alt="Mission Gharwapasi image two"/>
      
    </div>
    <div className="carousel-item">
      <img src={slide3} className="d-block w-100 custom__slider" alt="Mission Gharwapasi image three"/>
     
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Crousal