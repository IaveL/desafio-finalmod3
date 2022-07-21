import React from 'react'
import * as S from "./styles"
export default function Card(props) {
  return (
    <S.Card>
        <h2>{props.title}</h2>        
    </S.Card>
  )
}
