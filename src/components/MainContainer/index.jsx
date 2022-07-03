import React from 'react'
import * as S from "./styles"
import solutions from "../Cards/solutions"
import Card from "../Cards/index"
export default function MainContainer() {
  return (
    <S.Main>
      <S.IntroText>   
        <h1>Os objetivos de Desenvolvimento sustentável no Méier.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed metus eget ex semper sollicitudin. Nullam lorem nunc, vulputate vitae nibh in, aliquam accumsan elit. In nisl libero, efficitur in eros non, rutrum sagittis velit. Vivamus sagittis sed lorem ut venenatis. Mauris at lacinia urna, nec auctor velit. Vivamus odio ligula, finibus vel accumsan eu, sodales lacinia quam. Curabitur ultrices elit in quam consequat, id luctus massa sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam et risus ac risus dapibus convallis et vel justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Sed massa lorem, fermentum eu ipsum eu, commodo convallis dolor. Aliquam ultrices rhoncus nisi, quis iaculis ipsum. Ut sed iaculis ligula. Nunc convallis rutrum pharetra. Curabitur ullamcorper, neque semper fermentum sollicitudin, ipsum massa pretium turpis, a tincidunt ipsum nisi eu est. Sed commodo risus non orci lobortis, nec iaculis purus auctor. Suspendisse sed dignissim nunc, in hendrer</p>
            </S.IntroText>
      <S.SolutionsContainer>
        {solutions.map(item=>(
          <Card
            key={item.id} 
            title={item.title}
          />
        ))}
      </S.SolutionsContainer>
    </S.Main>
  )
}
