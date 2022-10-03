import styled from "styled-components"

export default function Footer({concluida}) {

  

    return (
        <FooterConcluidos>
            <p>{concluida}/8 Concluídas</p>
        </FooterConcluidos>
    )
}

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  position: fixed;
  padding: 10px;
  padding-bottom: 20px;
`

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/