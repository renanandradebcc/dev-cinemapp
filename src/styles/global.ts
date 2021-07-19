import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #dbdbdb;
    --pink: #F37DB2;
    --background-font: #FFFFFF;
  }

  *{
    margin:0;
    padding:0px;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
    }

    html{

      @media (max-width:1080px){
       font-size: 93.75%;
      }

      @media (max-width:720px){
       font-size: 87.5%;
      }
    }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  #root {
    height: 100vh;
  }

  button{
    cursor:pointer;
  }

  body, input, textarea, button {
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-family:'Poppins', sans-serif;
    font-weight: 600;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
