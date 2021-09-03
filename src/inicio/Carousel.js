import{Carousel } from "react-bootstrap";
import Placeholder from 'react-bootstrap/Placeholder'
import ap2 from "../assets/ap2.jpg";
import ap3 from "../assets/ap3.jpg";
import ap4 from "../assets/ap4.jpg";
import ap5 from "../assets/ap5.jpg";
import ap6 from "../assets/ap6.jpg";
import ap7 from "../assets/ap7.jpg";
import ap8 from "../assets/ap8.jpg";
import ap9 from "../assets/ap9.jpg";
import ap10 from "../assets/ap10.jpg";
import ap11 from "../assets/ap11.jpg";
import ap12 from "../assets/ap12.jpg";
import ap13 from "../assets/ap13.jpg";
import ap14 from "../assets/ap14.jpg";
import ap15 from "../assets/ap15.jpg";
import ap16 from "../assets/ap16.jpg";

function Carousel1() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={ap2} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap3} alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap4} alt="Third slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap5} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap6} alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap7} alt="Third slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap8} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap9} alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap10} alt="Third slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap11} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap12} alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap13} alt="Third slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap14} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap15} alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ap16} alt="Third slide"/>
        </Carousel.Item>
      </Carousel>
      <Placeholder xs={12} bg="warning" />
    </>
  );
};

export default Carousel1;
