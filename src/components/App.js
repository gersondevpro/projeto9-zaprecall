import { useState } from "react"
import Container from "./Container"
import Footer from "./Footer"
import Pergunta from "./Pergunta"

export default function App() {
    const perguntas = [
        {n: 1, questao: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {n: 2, questao: "O React é ...", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {n: 3, questao: "Componentes devem iniciar com ...", resposta: "letra maiúscula"},
        {n: 4, questao: "Podemos colocar ... dentro do JSX", resposta: "expressões"},
        {n: 5, questao: "O ReactDOM nos ajuda ...", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {n: 6, questao: "Usamos o npm para ...", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {n: 7, questao: "Usamos props para ...", resposta: "passar diferentes informações para componentes"},
        {n: 8, questao: "Usamos estado (state) para ...", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]

    const [respostas, setRespostas] = useState(0)
    const [arrayPerguntas, setArrayPerguntas] = useState(perguntas)

    return (
        <div className="screen-container">
            <Container perguntas={perguntas}/>

            {arrayPerguntas.map((pergunta, i) => 
            <Pergunta
            pergunta={pergunta}
            indice={i} key={i}
            arrayPerguntas={arrayPerguntas}
            setArrayPerguntas={setArrayPerguntas}
            />
            )}

            <Footer perguntas={perguntas}/>
        </div>
    )
}