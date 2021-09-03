import{Container,Row,Col, Placeholder} from "react-bootstrap";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import react_bootstrap from "../assets/react_bootstrap.png";
import firebase from "../assets/firebase.png";


function Impacto() {
  return (
  <Container className= "p-3 my-5 ">
  <Placeholder xs={12} bg="info"/>
  <Container className= "p-3">
    <Row>
      <Col className="text-center"><h1>HERRAMIENTAS TECNOLÓGICAS</h1></Col>
    </Row>
  </Container>
    <Row>
      <Col className= " my-3 d-flex">
        <div className= "justify-content-center mx-auto display:block">
          <a title="Git" href=" "><img src={html} className= "m-3" alt="link" height="130" width="130"/></a>
        </div>
      </Col>
      <Col className= " my-3 d-flex">
        <div className= "justify-content-center mx-auto display:block">
          <a title="Git" href=" "><img src={css} className= "m-3" alt="link" height="130" width="130"/></a>
        </div>
      </Col>
      <Col className= " my-3 d-flex">
        <div className= "justify-content-center mx-auto display:block">
          <a title="Git" href=" "><img src={js} className= "m-3" alt="link" height="130" width="130"/></a>
        </div>
      </Col>
      <Col className= " my-3 d-flex">
        <div className= "justify-content-center mx-auto display:block">
          <a title="Git" href=" "><img src={bootstrap} className= "m-3" alt="link" height="130" width="130"/></a>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className= " my-3 d-flex">
        <div className= "justify-content-center mx-auto display:block">
          <a title="Git" href=" "><img src={node} className= "m-3" alt="link" height="130" width="130"/></a>
        </div>
      </Col>
      <Col className= " my-3 d-flex">
        <div className= "justify-content-center mx-auto display:block">
          <a title="Git" href=" "><img src={react} className= "m-3" alt="link" height="130" width="130"/></a>
        </div>
      </Col>
      <Col className= " my-3 d-flex">
        <div className= "justify-content-center mx-auto display:block">
          <a title="Git" href=" "><img src={react_bootstrap} className= "m-3" alt="link" height="130" width="130"/></a>
        </div>
      </Col>
      <Col className= " my-3 d-flex">
        <div className= "justify-content-center mx-auto display:block">
          <a title="Git" href=" "><img src={firebase} className= "m-3" alt="link" height="130" width="130"/></a>
        </div>
      </Col>
    </Row>
  </Container>
  );
};

export default Impacto;
