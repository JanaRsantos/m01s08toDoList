import { useState } from "react"
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

export const ListItem = ({ tarefa, removerTarefa }) => {

  const [finalizado, setFinalizado] = useState(false);

  function handleFinalizarTarefa(evento) {
    evento.preventDefault();
    setFinalizado(!finalizado)
  }

  function handleRemoverTarefa (evento) {
    evento.preventDefault();    
    removerTarefa(tarefa);
  }

  return(
    <div className="list-items">
      { finalizado ? (
          <li key={tarefa.id} className={'list-item finalizado'}>
              {tarefa.texto}
              <Button className='m-1' onClick={handleFinalizarTarefa} variant='warning'>Finalizar</Button>
              <Button className='m-1' onClick={handleRemoverTarefa} variant='danger'>Remover</Button>
          </li>
        ) : (
          <li key={tarefa.id} className={'list-item'}>
              {tarefa.texto}
              <Button className='m-1' onClick={handleFinalizarTarefa} variant='warning'>Finalizar</Button>
              <Button className='m-1' onClick={handleRemoverTarefa} variant='danger'>Remover</Button>
          </li>
        )
      }

    </div>
  )
};