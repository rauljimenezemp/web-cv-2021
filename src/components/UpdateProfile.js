import { useRef, useState } from 'react';
import {Card, Form, Button,Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/authContext';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

function UpdateProfile() {
  const newEmailRef =useRef();
  const newPasswordRef =useRef();
  const confirmNewPasswordRef =useRef();
  const [ error, setError ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ loading, setLoading ] = useState('');
  const { currentUser, updateEmail, updatePassword } = useAuth();


   async function handleSubmit(e) {
     e.preventDefault();

     if(newPasswordRef.current.value === '' && confirmNewPasswordRef.current.value){
       return setError ('Nada que cambiar');
      }

     if(newPasswordRef.current.value !== confirmNewPasswordRef.current.value){
        return setError ('Password no coinciden!');
       }

      const promises = [];
      setError('')
      setLoading(true)

      if(newEmailRef.current.value !== '' && newEmailRef.current.value !== currentUser.email){
         promises.push(updateEmail(newEmailRef.current.value));
        }

      if(newPasswordRef.current.value !== ''){
         promises.push(updatePassword(newPasswordRef.current.value));
        }

        Promise.all(promises)
          .then(() => setMessage('Credenciales actualizadas!'))
          .cach(e => setError('Error al actualizar perfil:'+ e))
          .finally(() => setLoading(false))



   }


  return (
    <>
      <NavigationBar/>
      <Card className= "w-75 mx-auto mt-5">
        <Card.Body>
          <h1 className= "display-4 text-center my-3">Actualizar Perfil</h1>
          { error && error !== '' && <Alert variant="danger">{ error }</Alert> }
          { message && message !== '' && <Alert variant="seccess">{ message }</Alert> }
          <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>New email address</Form.Label>
              <Form.Control ref={ newEmailRef } type="email" placeholder="Dejar en blanco para no actualizar" autoComplete="off"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>New password</Form.Label>
              <Form.Control ref={ newPasswordRef } type="password" placeholder="Dejar en blanco para no actualizar" autoComplete="off" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm new Password</Form.Label>
              <Form.Control ref={ confirmNewPasswordRef } type="password" placeholder="Confirm Password" autoComplete="off" />
            </Form.Group>
            <Button className= "w-100" variant="primary" type="submit" disabled={ loading }>
              Actualizar perfil
            </Button>
          </Form>
          <Card.Text className="text-muted text-center my-3">
            <Link to="/login">Regresar</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>

  );
}
  export default UpdateProfile;
