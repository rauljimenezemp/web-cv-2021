import{Container,Col,Row,Image} from "react-bootstrap";
import perfil1 from "../assets/Perfil.JPG";
import portada1 from "../assets/portada1.png";
import linke from "../assets/linke.png";
import insta from "../assets/insta.png";
import face from "../assets/face.png";
import git from "../assets/logogit.png";

function Portada() {
  return (
  <Container>
    <Row>
      <Col className=" text-center" sm={4}>
        <Image src={perfil1} className= " my-5 p-3 border border-info" fluid roundedCircle/>
        <h3 className="display-15 p-3 bg-info">RAÚL JIMÉNEZ ROJAS</h3>
        <a href="https://www.google.com/" className= "p-3 text-info">rauljimenezemp@gmail.com</a>
        <Col className= " my-3 d-flex">
         <div className= "justify-content-center mx-auto display:block">
            <a title="Git" href="https://github.com/rauljimenezemp"><img src={git} className= "m-3" alt="link" height="65" width="65"/></a>
           <a title="LinkedIn" href="https://www.linkedin.com/in/raúl-jimroj"><img src={linke} className= "m-3" alt="link" height="65" width="65"/></a>
           <a title="Instagram" href="https://www.instagram.com/raul_jimroj/"><img src={insta} className= "m-3" alt="link" height="65" width="65"/></a>
           <a title="Facebook" href="https://www.facebook.com/rauljimroj/"><img src={face} className= "m-3" alt="link" height="65" width="65"/></a>
         </div>
        </Col>
      </Col>
      <Col sm={8}>
        <Image src={portada1} fluid />
      </Col>
    </Row>
  </Container>
  );
};

export default Portada;
