import { useState } from "react";
import { Button, Container, Form, Row, Col } from 'react-bootstrap';


export const CardAdicionar = ({adicionarTarefa, filtrarSomenteFinalizado, somenteFinalizados}) => {

  let [tarefa, setTarefa] = useState('');

  const handleAdicionar = (evento) => {
    evento.preventDefault();

    if (tarefa != "") {
      adicionarTarefa(tarefa)
      setTarefa("")
    }
  };

  return(
    <div className="card-add">
      <Container>

      <Form>
        <Row className="align-items-center">
          <Col sm={5} className="my-1">
            <Form.Label htmlFor="inputTarefa" visuallyHidden>Digite sua tarefa</Form.Label>
              <Form.Control
                id="inputTarefa"
                type="text"
                size="lg" 
                value={tarefa} 
                placeholder="Digite sua tarefa" 
                onChange={(e) => setTarefa(e.target.value)} />
          </Col>
          <Col sm={5} className='m-1'>
            <Button onClick={handleAdicionar} size="lg" variant='success'>Adicionar Tarefa</Button>
          </Col>
        </Row>

        <Row>
          <Form.Group as={Row} className="m-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 6, offset: 0 }}>
              <Form.Check 
                label="Somente Finalizadas"
                checked={somenteFinalizados}
                onChange={(e) => filtrarSomenteFinalizado(e.target.checked)} />
            </Col>
          </Form.Group>
        </Row>


      </Form>
      </Container>

    </div>
  );

};

