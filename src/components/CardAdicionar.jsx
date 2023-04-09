import { useState } from "react";

export const CardAdicionar = ({adicionarTarefa}) => {

  const [tarefa, setTarefa] = useState("");

  const handleAdicionar = (evento) => {
    evento.preventDefault();
    if (tarefa != "") {
      adicionarTarefa(tarefa);

      setTarefa("")
    }
  }

  return(
    <div className="card-add">
        <input
          placeholder="Adicionar tarefa"
          type="text"
          value={tarefa}
          onChange={(event) => setTarefa(event.target.value)} />

      <button onClick={handleAdicionar}>Adicionar Tarefa</button>

    </div>
  );

};

