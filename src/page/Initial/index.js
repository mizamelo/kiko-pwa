import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import { GoogleConf } from '../../services/google';  
import './styles.scss';

export default function Initial(props) {

  function redirect() {
    props.history.push('/login');
  }

  function handleSubmit(response) {
    //
  };

  return (
    <div className="container">
      <div className="initial-position">
        <button onClick={redirect} className="btn-default" type="submit">Entrar com um e-mail</button>
        <div className="social-container">
          <p>Facebook</p>
          <span></span>
          {/* <p className="gl">Google</p> */}
          <GoogleLogin
            clientId={GoogleConf.clientId}
            buttonText="Google"
            onSuccess={handleSubmit}
            onFailure={handleSubmit}
            cookiePolicy={GoogleConf.cookiePolicy}
            className="gl"
          />
        </div>
        <div className="complementar-text-container">
          <p>Já tem uma conta? {' '}
            <Link to="/register" className="default-link">Resgistrar-se</Link>
          </p> 
        </div>
      </div>
    </div>
  );
}
