import React from "react";
import {
  SolutionContainer,
  TextWrapper,
  Paragraph,
} from "../Transporte/styles";
import Navbar from "../Navbar";
export default function page2() {
  return (
    <>
      <SolutionContainer>
        <Navbar />
        <TextWrapper>
          <h2>Igualdade econômica</h2>
          <Paragraph>No bairro do Méier é evidente uma má distruibuição de renda daqueles que residem aqui.</Paragraph>
          <Paragraph>Enquanto em uma rua você vê prédios luxuosos, em outras você casas más posicionadas e em situações precárias.</Paragraph>
          <Paragraph>Se faz de grande necessidade políticas de melhor distribuição de renda e barateamento do preço de aluguéis.</Paragraph>
          <hr />
        </TextWrapper>
      </SolutionContainer>
    </>
  );
}
