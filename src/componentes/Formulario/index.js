import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [id, setId] = useState(uuidv4())
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            id,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setId('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Colaborador</h2>
                <CampoTexto
                obrigatorio={true}
                label="Nome"
                placeholder="Digite o seu Nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                obrigatorio={true}
                label="Cargo"
                placeholder="Digite o seu Cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                label="Imagem"
                placeholder="Digite o endereço da Imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                obrigatorio={true}
                label="Time" itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({
                    nome: nomeTime,
                    cor: corTime
                })
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <CampoTexto
                obrigatorio
                label="Nome"
                placeholder="Digite o nome do time"
                valor={nomeTime}
                aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoTexto
                obrigatorio
                label="Cor"
                placeholder="Digite a cor do time"
                valor={corTime}
                aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario