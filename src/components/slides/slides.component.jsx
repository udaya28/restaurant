import React from 'react';
// import logo from './src/photos/bg.jpg';
import img1 from '../../photos/1.jpg';
import img2 from '../../photos/2.jpg';
import img3 from '../../photos/3.jpg';
import img4 from '../../photos/4.jpg';
import img5 from '../../photos/5.jpg';
import Carousel from 'react-bootstrap/Carousel';
export const Slides = () => {
  return (
  <div className="container" id="gallery">
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="Third slide" />
      </Carousel.Item>
    </Carousel>

  </div>
  );
};
