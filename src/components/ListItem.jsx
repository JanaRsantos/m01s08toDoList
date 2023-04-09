import { useState } from "react"

export const ListItem = ({ tarefa, removerTarefa }) => {

  const [finalizado, setFinalizado] = useState(tarefa.finalizado)

  const finalizarTarefa = (evento) => {
    evento.preventDefault();
    setFinalizado(!finalizado);
  }

  const handleRemoverTarefa = (evento) => {
    evento.preventDefault();
    
    removerTarefa(tarefa);
  }

  return(
    <div className="list-items">
      { finalizado 
        ? (
          <li key={tarefa.id} className={'list-item finalizado'}>
              {tarefa.texto}
              <button className="list-item-button" onClick={finalizarTarefa}>finalizar</button>
              <button className="list-item-button" onClick={handleRemoverTarefa}>remover</button>
          </li>
        ) : (
          <li key={tarefa.id} className={'list-item'}>
              {tarefa.texto}
              <button className="list-item-button" onClick={finalizarTarefa}>finalizar</button>
              <button className="list-item-button" onClick={handleRemoverTarefa}>remover</button>
          </li>
        )
      }

    </div>
  )
};