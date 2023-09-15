import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select value={props.valor} onChange={evento => props.aoEditar(evento.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;