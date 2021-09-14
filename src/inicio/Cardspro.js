import{Card, Container,Row,Placeholder,Col } from "react-bootstrap";
import texemp from "../assets/texemp.png";
import soytex from "../assets/soytex.png";
import negociostex from "../assets/negociostex.png";
import extrem from "../assets/extrem.png";
import fiesta from "../assets/fiesta.png";
import diverti from "../assets/diverti.png";

function Cards() {
  return (
    <Container className="my-5">
    <Placeholder xs={12} bg="info"/>
    <Container className= "p-3">
      <Row>
        <Col className="text-center"><h1>PROYECTOS</h1></Col>
      </Row>
    </Container>
      <Row className="justify-content-center" xs={1} sm={2} md={4} >
        <Col  className="m-3">
          <Card style={{ height:'25rem'}} className="text-center">
            <Card.Img variant="top" src={texemp} />
            <Card.Body>
              <Card.Title>TEXCOCO EMPRENDEDORES</Card.Title>
              <Card.Subtitle>
                Medio de comunicación.
              </Card.Subtitle>
              <Card.Text>
              </Card.Text>
              <Card.Text className="text-muted">
                Un espacio para hacer networking con emprendedores y fortalecer los conocimientos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-3">
          <Card style={{ height:'25rem'}} className="text-center">
            <Card.Img variant="top" src={soytex} />
            <Card.Body>
              <Card.Title>SOY TEXCOCO</Card.Title>
              <Card.Subtitle>
                Medio de comunicación.
              </Card.Subtitle>
              <Card.Text>
              </Card.Text>
              <Card.Text className="text-muted">
                Un espacio con contenido atractivo del municipio.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-3">
          <Card style={{ height:'25rem'}} className="text-center">
            <Card.Img variant="top" src={negociostex} />
            <Card.Body>
              <Card.Title>NEGOCIOS TEXCOCO</Card.Title>
              <Card.Subtitle>
                Directorio de comercios locales.
              </Card.Subtitle>
              <Card.Text>
              </Card.Text>
              <Card.Text className="text-muted">
                Una plataforma web que funciona como un directorio de negocios.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-3">
          <Card style={{ height:'25rem'}} className="text-center">
            <Card.Img variant="top" src={extrem} />
            <Card.Body>
              <Card.Title>VIVEXTREM</Card.Title>
              <Card.Subtitle>
                Agencia de deportes extremos..
              </Card.Subtitle>
              <Card.Text>
              </Card.Text>
              <Card.Text className="text-muted">
                Una agencia de viajes para realizar deportes extremos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-3">
          <Card style={{ height:'25rem'}} className="text-center">
            <Card.Img variant="top" src={fiesta} />
            <Card.Body>
              <Card.Title>EXPO FIESTA KIDS</Card.Title>
              <Card.Subtitle>
                Organización de una Expo.
              </Card.Subtitle>
              <Card.Text>
              </Card.Text>
              <Card.Text className="text-muted">
                Expo de productos y servicios para fiestas infantiles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-3">
          <Card style={{ height:'25rem'}} className="text-center">
            <Card.Img variant="top" src={diverti} />
            <Card.Body>
              <Card.Title>DIVERTINFLABLES:</Card.Title>
              <Card.Subtitle>
                Fabrica de inflables.
              </Card.Subtitle>
              <Card.Text>
              </Card.Text>
              <Card.Text className="text-muted">
                Una fábrica y distribuidora de juegos inflables.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cards;
