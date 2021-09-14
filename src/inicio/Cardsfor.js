import{Card,Container,Row,Col } from "react-bootstrap";
import Placeholder from 'react-bootstrap/Placeholder';
import devf from "../assets/devf.png";
import adwords from "../assets/adwords.png";
import liceo from "../assets/liceo.png";


function Cardsfor() {
  return (
    <Container className="my-5">
      <Placeholder xs={12} bg="info"/>
      <Container className= "p-3">
        <Row>
          <Col className="text-center"><h1>FORMACIÓN</h1></Col>
        </Row>
      </Container>
      <Row className="justify-content-center" xs={1} sm={2} md={3} >
        <Col className="m-3">
          <Card style={{ height:'30.5rem'}} className="text-center">
            <Card.Img variant="top" src={devf} />
            <Card.Body>
              <Card.Title>BOOT CAMP DEV.F</Card.Title>
              <Card.Text>
                CDMX: Máster en coding.
              </Card.Text>
              <Card.Text className="text-muted">
                Febrero 2021- febrero 2022
              </Card.Text>
              <Card.Text>
                Actualmente tomo el curso de Máster en Coding en el Bootcamp DEV.F.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-3">
          <Card className="text-center">
            <Card.Img variant="top" src={adwords} />
            <Card.Body>
              <Card.Title>MERCATITLÁN</Card.Title>
              <Card.Text>
                CDMX. Google AdWords.
              </Card.Text>
              <Card.Text className="text-muted">
                Febrero 2017
              </Card.Text>
              <Card.Text>
                Tome el curso intensivo de Google AdWords.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-3">
          <Card className="text-center">
            <Card.Img variant="top" src={liceo} />
            <Card.Body>
              <Card.Title>LICEO UNIVERSIDAD PEDRO DE GANTE</Card.Title>
              <Card.Text>
                Texcoco: Comercio Internacional.
              </Card.Text>
              <Card.Text className="text-muted">
                2013-2016
              </Card.Text>
              <Card.Text>
                Curse la carrera de Comercio Internacional, no tramite mi titulo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cardsfor;
