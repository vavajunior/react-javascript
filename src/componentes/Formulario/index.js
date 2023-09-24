import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {
    const times = props.times;
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoSalvar({
            nome,
            cargo,
            imagem,
            time
        })

        //Limpar formulário
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto valor={nome} aoEditar={input => setNome(input)}
                    label="Nome" obrigatorio={true} placeholder="Digite seu nome" />
                <CampoTexto valor={cargo} aoEditar={input => setCargo(input)}
                    label="Cargo" obrigatorio={true} placeholder="Digite seu cargo" />
                <CampoTexto valor={imagem} aoEditar={input => setImagem(input)}
                    label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa valor={time} aoEditar={input => setTime(input)}
                    label="Time" itens={times} obrigatorio={true} />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario;