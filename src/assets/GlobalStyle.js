import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Courier New', Courier, monospace;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background-color: rgb(255, 238, 238);

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
    a:link {
      color: inherit;
    }
  ` 
export default GlobalStyle