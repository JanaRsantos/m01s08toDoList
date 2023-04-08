import PropTypes from "prop-types";

export const CardAdicionar = (props) =>{

  const {valor, novaTarefa, adicionarTarefa} = props

  return(
    <div className="card-add">
      <form action="">
        <input
          placeholder="Adicionar tarefa"
          type="text"
          value={valor}
          onChange={novaTarefa} />
      </form>

      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>

    </div>
  )

};

CardAdicionar.propTypes = {
  valor: PropTypes.string.isRequired,
  novaTarefa: PropTypes.func.isRequired,
  adicionarTarefa: PropTypes.func
};


