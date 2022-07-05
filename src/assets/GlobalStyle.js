import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap');
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #FFEEEE;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    li {
        list-style-type: none;
    }
    a:visited {
      text-decoration: none;
      color: inherit;
    }
    a {
      text-decoration: none;
    }
  ` 
export default GlobalStyle