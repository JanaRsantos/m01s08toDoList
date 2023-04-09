import { useState } from 'react'
import './App.css'
import  { CardAdicionar } from './components/CardAdicionar'
import { ListItem } from './components/ListItem'


function App() {

  const [listaTarefas, setListaTarefas] = useState([{ id: 1, texto: "Tarefa 01", finalizado: false },]);

  const adicionarTarefa = (tarefa) => {
    const novaTarefa = { id: listaTarefas.lengh + 1, texto: tarefa, finalizado: false };
    setListaTarefas([...listaTarefas, novaTarefa]);
  }

  const removerTarefa = (tarefa) => {
    const novaLista = listaTarefas.filter(item => item.id != tarefa.id)
    setListaTarefas(novaLista)
  }

  return (
    <div className="App">
      <CardAdicionar 
        adicionarTarefa={adicionarTarefa}
      />
      <ol>
        { listaTarefas.map((tarefa) => (
          <ListItem tarefa={tarefa} removerTarefa={removerTarefa}  />
        ))
        }
      </ol>
    </div>
  )
}

export default App
