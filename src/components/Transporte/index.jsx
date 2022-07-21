import * as S from "./styles";
import Navbar from "../Navbar";
export default function Transporte() {
  return (
    <>
      <S.SolutionContainer>
    <Navbar/>
        <S.TextWrapper>
          <h2>Transporte mais sustentável.</h2>
          <S.Paragraph>
            Atualmente, por mais que ainda bem conectado com o resto da cidade,
            o bairro do Méier ainda é muito dependente de Ônibus. Existe o
            transporte por trem, porém este ainda é limitado à algumas áreas da
            cidade.
          </S.Paragraph>
          <S.Paragraph>
            O problema da dependência não só do Méier, mas do Rio como um todo,
            em transporte por ônibus, reside justamente no fato de serem
            poluentes, não serem os mais efetivos para transporte em massa e
            agravarem engarrafamentos.
          </S.Paragraph>
          <S.Paragraph>
            Mantendo isso em mente, uma solução sustentável que implora para ser
            atendida, é o esforço de forma geral, para a longo prazo, diminuir
            quase que a zero a dependência da população no transporte
            rodoviário.
          </S.Paragraph>
          <S.Paragraph>
            Tornando assim uma cidade com um método de transporte verdadeiramente efetivo, rápido e menos poluente.
          </S.Paragraph>
          <hr />
        </S.TextWrapper>
      </S.SolutionContainer>
    </>
  );
}
