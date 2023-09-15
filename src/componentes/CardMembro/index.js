import './CardMembro.css'

const CardMembro = ({ nome, cargo, imagem, corPrimaria }) => {
    return (
        <div className='cardMembro'>
            <div className='cabecalho' style={{backgroundColor: corPrimaria}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default CardMembro