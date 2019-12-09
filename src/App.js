import React from 'react'; 
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Router from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
