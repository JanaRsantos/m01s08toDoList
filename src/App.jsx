import { useState } from 'react'
import './App.css'
import { CardAdicionar } from './components/CardAdicionar';

function App() {

  const [listaTarefas, setListaTarefas] = useState([]);

  return (
    <div className="App">
      <CardAdicionar />
    </div>
  )
}

export default App
