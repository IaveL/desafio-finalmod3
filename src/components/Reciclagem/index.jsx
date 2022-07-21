import React from "react";
import {
  SolutionContainer,
  TextWrapper,
  Paragraph,
} from "../Transporte/styles";
import Navbar from "../Navbar";
export default function Reciclagem() {
  return (
    <>
      <SolutionContainer>
        <Navbar />
        <TextWrapper>
          <h2>Valorização da Reciclagem</h2>
          <Paragraph>De forma geral, infelizmente apenas a reciclagem de alumínio/ferro é valorizada, o que, leva a um problema indireto.</Paragraph>
          <Paragraph>
            Um problema viciado tanto no Méier quanto no Rocha, onde morava até uns meses atrás, são de que os catadores reviram o lixo buscando exclusivamente ferro, como latinhas, por ex, e ignoram o resto: plástico e afins.
          </Paragraph>
          <Paragraph>
            O que, no fim, diminui a quantidade de outros tipos da materiais na reciclagem de forma mais rápida.
          </Paragraph>
          <Paragraph>Logo, o estado deveria incentivar a reciclagem de outros tipos de materiais.</Paragraph>
          <hr />
        </TextWrapper>
      </SolutionContainer>
    </>
  );
}
