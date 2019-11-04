import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Poppins !important;
  }
  body {
    background: #2E5077;
    color: #FFF;
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;
  }
  input, button {
    font-family: 'Source Sans Pro', sans-serif;
  }
  button {
    cursor: pointer;
  }

  .container {
    max-width: 320px;
    width: 320px;
    margin: 0 auto; 
  }

  .btn-default {
    width: 292px;
    margin: 0 auto;
    position: relative;
    height: 47px;
    border-radius: 10px;
    border: none;
    background: #F6C543;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
    font-size:15px;
    font-weight: 600;
    font-family: Poppins, Sans Serif;
    font-style: normal;
    color: #2E5077;


    &:hover {
      box-shadow: 0px 4px 13px rgba(0, 0, 0 0.45);
      background: #FADC8C;
    }
  }

  .default-link { 
    color: #F6C543;
    text-decoration: none;
    cursor: pointer;
  }
`;