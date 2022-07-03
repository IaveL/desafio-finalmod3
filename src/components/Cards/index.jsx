import React from 'react'
import * as S from "./styles"
export default function Card(props) {
  return (
    <S.Card primary>
        <h2>{props.title}</h2>
        <img src={props.img}/>
    </S.Card>
  )
}
