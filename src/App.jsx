import React from "react";
import GlobalStyle from "./assets/GlobalStyle";
import {Routes, Route} from "react-router-dom"
import MainContainer from "./components/Main/index"
import Page1 from "./components/page1/index"
import Page2 from "./components/page2/index"
import Page3 from "./components/page3/index"
import Page4 from "./components/page4/index"
import Page5 from "./components/page5/index"
import Navbar from "./components/Navbar";

export default function App() {
  return (     
    <>
    <GlobalStyle/>
    <Navbar/>
          <Routes>
            <Route path="/" element={<MainContainer/>}/>
            <Route path="/page1" element={<Page1/>}/>
            <Route path="/page2" element={<Page2/>}/>
            <Route path="/page3" element={<Page3/>}/>
            <Route path="/page4" element={<Page4/>}/>
            <Route path="/page5" element={<Page5/>}/>
          </Routes>    
    </>    
  );
}