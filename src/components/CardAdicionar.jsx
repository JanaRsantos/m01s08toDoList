import { useState } from "react";
import PropTypes from "prop-types";

export const CardAdicionar = ({adicionarTarefa}) =>{

  const [textoTarefa, setTextoTarefa] = useState("");

  return(
    <div className="card-add">
        <input
          placeholder="Adicionar tarefa"
          type="text"
          value={textoTarefa}
          onChange={(event) => setTextoTarefa(event.target.value)} />

      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>

    </div>
  );

};

CardAdicionar.propTypes = {
  adicionarTarefa: PropTypes.func.isRequired
};


