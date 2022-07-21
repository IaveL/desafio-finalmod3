import React from "react";
import {
  SolutionContainer,
  TextWrapper,
  Paragraph,
} from "../Transporte/styles";
import Navbar from "../Navbar";
export default function Saude() {
  return (
    <>
      <SolutionContainer>
        <Navbar />
        <TextWrapper>
          <h2>Saúde Pública de Excelência</h2>
          <Paragraph> Um notório problema enfrentado pelo Rio de Janeiro inteiro, é a qualidade da saúde pública - abaixo do que a população que precisa desse tratamento, merece. </Paragraph>
          <Paragraph>Sejam as filas, a falta de médicos, a falta de equipamento para o trabalho, a condição precária onde estes trabalham, se faz urgente uma intervenção para que o povo possa ser tratado com dignidade.</Paragraph>
          <Paragraph>É preciso que, antes de tudo, a população esteja saudável.</Paragraph>
          <hr />
        </TextWrapper>
      </SolutionContainer>
    </>
  );
}
