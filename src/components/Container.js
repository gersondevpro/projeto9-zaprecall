import { useState } from 'react';
import styled from 'styled-components';
import logoZapRecall from "../assets/img/logo.png"
import Flashcards from './Flashcards';
import deck from './deck';
import Footer from './Footer';

export default function Container() {

    const [questionario, setQuestionario] = useState(deck)
    const [concluida, setConcluida] = useState(0)

    return (
        <ScreenContainer>   
            <LogoContainer>
                <img src={logoZapRecall} />
                <h1>ZapRecall</h1>
            </LogoContainer>
            
            {questionario.map((item) =>
            <Flashcards key={item.num}
            item={item}
            concluida={concluida}
            setConcluida={setConcluida}
            />
            )}
            <Footer
            concluida={concluida}
            />
        </ScreenContainer>
    )
}


const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 677px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0px;
  padding: 0px;
  padding-bottom: 200px;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    img {
        width: 52px;
    }
    
    h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
    }
`