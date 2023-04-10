import { useState } from 'react'
import { CardAdicionar } from './components/CardAdicionar'
import { ListItem } from './components/ListItem'
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

import './App.css'


function App() {

  const [somenteFinalizados, setSomenteFinalizados] = useState(false);

  const [listaTarefas, setListaTarefas] = useState([
    { id: 1, texto: "Tarefa 01", finalizado: false },
    { id: 2, texto: "Tarefa 02", finalizado: true },
  ]);

  function adicionarTarefa(tarefa) {
    let novaLista = [...listaTarefas];

    novaLista.push({ id: listaTarefas.length + 1, texto: tarefa, finalizado: false });
    setListaTarefas(novaLista)
  }

  const removerTarefa = (tarefa) => {
    const novaLista = listaTarefas.filter((item) => item.id != tarefa.id)
    setListaTarefas(novaLista)
  }

  const filtrarSomenteFinalizado = (valor) => {
    setSomenteFinalizados(valor)
  }

  const listaFiltrada = listaTarefas.filter((item) => item.finalizado)

  return (
    <Container className="App m-5">
      <h1>Lista de Tarefas</h1>

      <CardAdicionar 
        filtrarSomenteFinalizado={filtrarSomenteFinalizado} 
        adicionarTarefa={adicionarTarefa} 
        somenteFinalizados={somenteFinalizados}
      />
      <ol>
      {
        somenteFinalizados ? (
            listaFiltrada.map(tarefa => (
              <ListItem tarefa={tarefa} key={tarefa.id} removerTarefa={removerTarefa} />
            ))
          ) : (
            listaTarefas.map(tarefa => (
              <ListItem tarefa={tarefa} key={tarefa.id} removerTarefa={removerTarefa} />
            ))
          )
      }
      </ol>
    </Container>
  )
}

export default App
