import React from "react";
import GlobalStyle from "./assets/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/Main/index";
import Transporte from "./components/Transporte/index";
import Igualdade from "./components/Igualdade/index";
import Reciclagem from "./components/Reciclagem/index";
import Saude from "./components/Saúde/index";
import Educacao from "./components/Educacao/index";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/Transporte" element={<Transporte />} />
        <Route path="/igualdade-economica" element={<Igualdade />} />
        <Route path="/reciclagem" element={<Reciclagem />} />
        <Route path="/saude" element={<Saude />} />
        <Route path="/educacao" element={<Educacao />} />
      </Routes>
    </>
  );
}
