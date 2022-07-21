import * as S from "./styles";
import Card from "../Cards/index";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import solutions from "../../assets/Solutions";

export default function MainContainer() {
  return (
    <>
      <Navbar />
      <S.Main>
        <S.IntroText>
          <h1>Os objetivos de Desenvolvimento sustentável no Méier.</h1>
          <p></p>
        </S.IntroText>
        <S.SolutionsContainer>
          {solutions.map((item) => (
            <Link to={item.link}>
              <Card title={item.content} />
            </Link>
          ))}
        </S.SolutionsContainer>
        {/* <button>Dark mode?</button> */}
      </S.Main>
    </>
  );
}
