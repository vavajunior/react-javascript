import CardMembro from '../CardMembro'
import './Time.css'

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
    const css = { background: corSecundaria }
    return (
        (colaboradores.length > 0) &&
        <section className="time" style={css}>
            <h3 style={{ borderColor: corPrimaria }}>
                {nome}
            </h3>
            <div className='colaboradores'>
                {
                    colaboradores.map(item =>
                        <CardMembro key={item.nome} nome={item.nome} cargo={item.cargo}
                            imagem={item.imagem} corPrimaria={corPrimaria} />)
                }
            </div>
        </section>
    )
}

export default Time