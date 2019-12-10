import React, { Suspense } from 'react'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from './page/Loading';
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

const Loader = () => (
  <Loading />
);

export default () => (
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
);
