import { useRef, useState } from 'react';
import {Card, Form, Button,Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/authContext';
import { Link} from 'react-router-dom';


function ForgotPassword() {
  const emailRef =useRef();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState('');
  const [ message, setMessage ] = useState('');
  const { resetPassword } = useAuth();


   async function handleSubmit(e) {
     e.preventDefault();

     try {
       setError('')
       setLoading(true)
       await resetPassword(emailRef.current.value);
       setMessage('Verifica tu correo para cambiar tu contraseña!')
       setLoading(false);
     } catch (e) {
       setError('Error al cambiar contraseña:' + e.message);
       setLoading(false)
       console.log(e);
     }
   }


  return (
    <Card className= "w-75 mx-auto mt-5">
      <Card.Body>
        <h1 className= "display-4 text-center my-3">Password Reset</h1>
        { error && error !== '' && <Alert variant="danger">{ error }</Alert> }
        { message && message !== '' && <Alert variant="seccess">{ message }</Alert> }
        <Form onSubmit={ handleSubmit }>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={ emailRef } type="email" placeholder="Enter email" autoComplete="off" required />
          </Form.Group>

          <Button className= "w-100" variant="primary" type="submit" disabled={ loading }>
            Reset Password
          </Button>
        </Form>
        <Card.Text className="text-muted text-center my-3">
          <Link to="/login">Regresar</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
  export default ForgotPassword;
