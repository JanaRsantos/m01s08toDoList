import { useState } from 'react'
import './App.css'
import { CardAdicionar } from './components/CardAdicionar';

function App() {

  const [tarefa, setTarefa] = useState("")

  function MinhasTarefas() {
    setTarefa(tarefa + 1);
  }

  return (
    <div className="App">
      <CardAdicionar />
    </div>
  )
}

export default App
