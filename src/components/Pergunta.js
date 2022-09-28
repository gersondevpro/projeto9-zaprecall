import setaPlay from "../assets/img/seta_play.png"
import setaVirar from "../assets/img/seta_virar.png"

export default function Pergunta({pergunta, indice, arrayPerguntas, setArrayPerguntas, qtdPerguntas, setQtdPerguntas}) {

    /* const [qtdPerguntas, setQtdPerguntas] = useState(arrayPerguntas.length) */

    function mostrarPergunta(i) {
        const novaQtdDePerguntas = arrayPerguntas.filter((valor, index) => index !== i);
        setArrayPerguntas(novaQtdDePerguntas)
    }

    function mostrarResposta(i) {
        console.log(i)
    }

    return (
        <>
            <div className="pergunta-fechada" onClick={() => mostrarPergunta(indice)}>
                <p>{`Pergunta ${arrayPerguntas[indice].n}`}</p>
                <img src={setaPlay} alt="seta play" />
            </div>
            <div className="pergunta-aberta">
                <p>{pergunta.questao}</p>
                <img
                src={setaVirar}
                alt="seta virar"
                onClick={mostrarResposta}
                />
            </div>
{/*             <div className="pergunta-aberta">
                <p>{pergunta.resposta}</p>
            </div> */}
        </>
    )
}