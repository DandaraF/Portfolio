import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body{
    width: 100%;
    font-size: 10px;
    color: ${(props) => props.theme.palette.text.primary};
    background-color: ${(props) => props.theme.palette.background.default};
    /* font-family: 'Roboto', sans-serif; */



  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
