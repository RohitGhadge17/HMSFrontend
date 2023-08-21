import React from "react";
import Carousel from "react-bootstrap/Carousel";
import co1 from "../image/co1.jpg";
import co2 from "../image/medicine.jpg";
import co4 from "../image/co4.jpg";
import "./Jumbo.css";

const Jumbo = () => {
  return (
    <div>
      <div className="jumbo" data-testid="jumbo">
        <div className="image">
          <Carousel interval={2000} keyboard={false} data-testid="carousel">
            <Carousel.Item className="carousel">
              <img alt="carousel-image1" className="d-block w-100" src={co1} />
            </Carousel.Item>

            <Carousel.Item className="carousel">
              <img alt="carousel-image2" className="d-block w-100" src={co2} />
            </Carousel.Item>

            <Carousel.Item className="carousel">
              <img alt="carousel-image3" className="d-block w-100" src={co4} />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
