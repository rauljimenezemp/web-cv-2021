import{Container,Row,Col} from "react-bootstrap";


function Impacto() {
  return (
  <Container className= "p-3 my-5">
    <Row>
      <Col className="border-bottom border-info m-2 text-center"><h3>INNOVACIÓN</h3></Col>
      <Col className="border-bottom border-info m-2 text-center"><h3>TECNOLOGÍA</h3></Col>
      <Col className="border-bottom border-info m-2 text-center"><h3>SOFTWARE</h3></Col>
    </Row>
    <Row>
      <Col className="border-bottom border-info m-2 text-center"><h3>EMPRENDIMIENTO</h3></Col>
      <Col className="border-bottom border-info m-2 text-center"><h3>NEGOCIOS</h3></Col>
      <Col className="border-bottom border-info m-2 text-center"><h3>INVESTIGACIÓN</h3></Col>
    </Row>
  </Container>
  );
};

export default Impacto;
