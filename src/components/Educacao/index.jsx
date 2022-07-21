import React from "react";
import {
  SolutionContainer,
  TextWrapper,
  Paragraph,
} from "../Transporte/styles";
import Navbar from "../Navbar";
export default function Educacao() {
  return (
    <>
      <SolutionContainer>
        <Navbar />
        <TextWrapper>
          <h2>Educação Ampla</h2>
          <Paragraph>Criação de cursos a preço popular/gratuitos visando o pré-vestibular </Paragraph>
          <Paragraph>Criação de capacitação gratuita pra jovens de baixa renda, nas áreas tecnológicas. </Paragraph>
          <Paragraph>Também se faz necessário a criação de bibliotecas comunitárias para convívio público.</Paragraph>
          <hr />
        </TextWrapper>
      </SolutionContainer>
    </>
  );
}
