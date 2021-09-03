import { useRef, useState } from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {firestoreDB1} from '../firebase'

function Form1() {
  const entradaName = useRef ('');
  const entradaApellido = useRef ('');
  const entradaEmail = useRef ('');
  const entradaCelular = useRef ('');
  const entradaMensaje = useRef ('');
  const [ error, setError ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ loading, setLoading ] = useState('');


  async function handleSubmit (e) {
  e.preventDefault();

  try {
    setError('')
    setMessage('')
    setLoading(true)

    const inputValues = {
      name: entradaName.current.value,
      apellido: entradaApellido.current.value,
      email: entradaEmail.current.value,
      celular: entradaCelular.current.value,
      mensaje: entradaMensaje.current.value,
      createdAt: firestoreDB1.getCurrentTimestamp()
    }
    await firestoreDB1.form1.add(inputValues)
    setLoading(false)
    setMessage('Mensaje enviado!')
  } catch (e) {
    setError('Error al enviar mensaje' + e.message);
    setLoading(false)
    console.log(e);
  }


  setMessage('Mensaje enviado!');
  setLoading(false);
}

  return (
    <>
      <Card className= "w-75 mx-auto mt-5">
        <Card.Body>
          <h1 className= "display-4 text-center my-3">Contacto</h1>
          { error && error !== '' && <Alert variant="danger">{ error }</Alert> }
          { message && message !== '' && <Alert variant="success">{ message }</Alert> }
          <Form onSubmit={ handleSubmit }>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Nombre *</Form.Label>
              <Form.Control ref={entradaName} type="text" placeholder="Escribe aquí tu nombre" autoComplete="off" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Apellido *</Form.Label>
              <Form.Control ref={entradaApellido} type="text" placeholder="Escribe aquí tu apellido" autoComplete="off" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control ref={entradaEmail} type="email" placeholder="Escribe aquí tu email" autoComplete="off" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Celular</Form.Label>
              <Form.Control ref={entradaCelular} type="text" placeholder="Escribe aquí tu celular" autoComplete="off" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Mensaje *</Form.Label>
              <Form.Control ref={entradaMensaje} type="text" placeholder="Escribe aquí tu mensaje" autoComplete="off" required />
            </Form.Group>

            <Button className= "w-100" variant="primary" type="submit" disabled={ loading }>
                Enviar
            </Button>
          </Form>
          <Card.Text className="text-muted text-center my-3">
            <Link to="/">Regresar</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>

  );
}
  export default Form1;
