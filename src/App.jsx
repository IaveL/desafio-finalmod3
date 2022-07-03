import MainContainer from "./components/MainContainer/index"
import { createGlobalStyle } from "styled-components"
  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  ` 

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <MainContainer/>
    </div>
  );
}

export default App;
