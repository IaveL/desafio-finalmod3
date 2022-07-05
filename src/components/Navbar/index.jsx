import React from 'react'
import { Link } from "react-router-dom";
import * as S from "./styles"

export default function Navbar() {
  return (
    <S.Navbar>
        <S.Nav>
            <Link to="/"> <li>Home</li> </Link>
                <a href="google.com" target="_blank">Clica pro meu blog.</a>
        </S.Nav>
    </S.Navbar>
  )
}
