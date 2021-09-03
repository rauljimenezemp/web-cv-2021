import { useRef, useState } from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap'
import {firestoreDB} from '../firebase';
import {Link} from 'react-router-dom';

function PostForm() {
  const postTitle = useRef ('');
  const postContent = useRef ('');
  const postCategory = useRef ('');
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
      title: postTitle.current.value,
      content: postContent.current.value,
      category: postCategory.current.value,
      createdAt: firestoreDB.getCurrentTimestamp()
    }
    await firestoreDB.posts.add(inputValues)
    setLoading(false)
    setMessage('Post publicado')
  } catch (e) {
    setError('Error al crear Post' + e.message);
    setLoading(false)
    console.log(e);
  }


  setMessage('Post publicado!');
  setLoading(false);
}

  return (
    <>
      <Card className= "w-75 mx-auto mt-5">
        <Card.Body>
          <h1 className= "display-4 text-center my-3">Nuevo Post</h1>
          { error && error !== '' && <Alert variant="danger">{ error }</Alert> }
          { message && message !== '' && <Alert variant="success">{ message }</Alert> }
          <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Titulo</Form.Label>
              <Form.Control ref={postTitle} type="text" placeholder="Escribe aquí el nombre de la posición" autoComplete="off" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Contenido</Form.Label>
              <Form.Control ref={postContent} type="text" placeholder="Escribe aquí el nombre de la empresa" autoComplete="off" required />
            </Form.Group>

            <Form.Select ref={postCategory} className="mb-4" aria-label="Categoría" required>
              <option value="">Categoría</option>
              <option value="admin">Administración</option>
              <option value="tech">Tecnología</option>
              <option value="design">Diseño</option>
            </Form.Select>

            <Button className= "w-100" variant="primary" type="submit" disabled={ loading }>
              Publicar
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
  export default PostForm;
