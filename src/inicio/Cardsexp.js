import{Card,Container,Row,Col } from "react-bootstrap";
import Placeholder from 'react-bootstrap/Placeholder'
import actemp from "../assets/actemp.png";
import informatex from "../assets/informatex.png";
import empublizid from "../assets/empublizid.png";
import ruliz from "../assets/ruliz.png";

function Cardsexp() {
  return (
    <Container className="my-5">
      <Placeholder xs={12} bg="info"/>
      <Container className= "p-3">
        <Row>
          <Col className="text-center"><h1>EXPERIENCIA</h1></Col>
        </Row>
      </Container>
      <Row className="justify-content-center" xs={1} sm={2} md={3} >
        <Col className="m-3">
          <Card style={{ height:'30rem'}} className="text-center">
            <Card.Img variant="top" src={actemp} fluid/>
            <Card.Body>
              <Card.Title>ACTÍVATE Y EMPRENDE</Card.Title>
              <Card.Text>
                Texcoco: Creador y director
              </Card.Text>
              <Card.Text className="text-muted">
                Febrero 2018-2021
              </Card.Text>
              <Card.Text>
              Desarrollé una plataforma web, que funciona como incubadora de negocios, para ayudar a las personas que quieren emprender.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-3">
          <Card style={{ height:'30rem'}} className="text-center">
            <Card.Img variant="top" src={informatex} fluid/>
            <Card.Body>
              <Card.Title>INFORMA TEX</Card.Title>
              <Card.Text>
                Texcoco: Creador y director
              </Card.Text>
              <Card.Text className="text-muted">
                Febrero 2019
              </Card.Text>
              <Card.Text>
                Desarrollé un medio de comunicación digital, para apoyar la difusión de noticias con contenido positivo y buenos fundamentos, con una inversión mínima y logrando una excelente aceptación de los ciudadanos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-3">
          <Card style={{ height:'30rem'}}  className="text-center">
            <Card.Img variant="top" src={empublizid} fluid/>
            <Card.Body>
              <Card.Title>EMPUBLIZID</Card.Title>
              <Card.Text>
                Texcoco: Creador y director
              </Card.Text>
              <Card.Text className="text-muted">
                Febrero 2019
              </Card.Text>
              <Card.Text>
                Desarrollé una agencia de publicidad online, con servicio de desarrollo web, imagen corporativa, redes sociales y contenido.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-3">
          <Card style={{ height:'30rem'}}  className="text-center">
            <Card.Img variant="top" src={ruliz} fluid/>
            <Card.Body>
              <Card.Title>RULIZ INFLABLES</Card.Title>
              <Card.Text>
                Texcoco: Creador y director
              </Card.Text>
              <Card.Text className="text-muted">
                Febrero 2005-2020
              </Card.Text>
              <Card.Text>
                Desarrollé un negocio de alquiler de juegos inflables para fiestas infantiles, con mucho éxito en la zona de Texcoco y municipios de su alrededor.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cardsexp;
