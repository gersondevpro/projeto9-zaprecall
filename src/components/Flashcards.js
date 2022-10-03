import { useState } from "react"
import styled from "styled-components"
import setaPlay from "../assets/img/seta_play.png"
import setaVirar from "../assets/img/seta_virar.png"
import deck from "./deck"

export default function Flashcards({ item, questionario, setQuestionario, concluida, setConcluida }) {

    const [status, setStatus] = useState(0)
    const [avalia, setAvalia] = useState("")

    function exibirPergunta(pergunta) {
        const novoValor = 1
        setStatus(novoValor)
    }

    function exibirResposta(resposta) {
        const novoValor = 2
        setStatus(novoValor)
    }

    function naoLembrei(dado01) {
        const novoValor = 3
        setStatus(novoValor)

        console.log(concluida)
        const resultado = concluida + 1
        setConcluida(resultado)
    }

    function quaseNaoLembrei(dado02) {
        const novoValor = 3
        setStatus(novoValor)

        console.log(concluida)
        const resultado = concluida + 1
        setConcluida(resultado)
    }

    function zap(dado03) {
        const novoValor = 3
        setStatus(novoValor)

        console.log(concluida)
        const resultado = concluida + 1
        setConcluida(resultado)
    }

    if (status === 0) {
        return (
            <PerguntaFechada>
                <p>{`Pergunta ${item.num}`}</p>
                <img src={setaPlay} alt="Abrir questão" onClick={() => exibirPergunta(item)} />
            </PerguntaFechada>
        )
    }

    if (status === 1) {
        return (
            <PerguntaAberta>
                <p>{item.enunciado}</p>
                <img src={setaVirar} alt="Mostrar Resposta" onClick={() => exibirResposta(item)} />
            </PerguntaAberta>
        )
    }

    if (status === 2) {
        return (
                <RespostaAberta>
                    <p>{item.resp}</p>
                    <ContainerBotoes>
                    <button onClick={() => naoLembrei(item)}>Não lembrei</button>
                    <button onClick={() => quaseNaoLembrei(item)}>Quase não lembrei</button>
                    <button onClick={() => zap(item)}>Zap!</button>
                </ContainerBotoes>
                </RespostaAberta>
        )
    }

    if (status === 3) {
        return (
            <PerguntaFechada>
                <p>{`Pergunta ${item.num}`}</p>
                <img src={setaPlay} alt="Abrir questão" onClick={() => alert("Você já respondeu essa questão")} />
            </PerguntaFechada>
        )
    }

}


const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
        text-decoration: ${(avalia) => avalia === "" ? "line-through" : ""};   
    }

    img {
        cursor: pointer;
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    }
`

const RespostaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
  gap: 20px;

    button {
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
    cursor: pointer;
    }
`