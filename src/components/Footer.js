export default function Footer({perguntas}) {
    return (
        <div className="footer-concluidos">
            <div className="container-botoes">
                <button>Não lembrei</button>
                <button>Quase não lembrei</button>
                <button>Zap!</button>
            </div>
            <p>{/* ${respostas} */`/${perguntas.length} Concluídos`}</p>
        </div>
    )
}