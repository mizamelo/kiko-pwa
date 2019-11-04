import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

// import { Container } from './styles';

export default function Initial(props) {

  function redirect() {
    props.history.push('/login');
  }

  return (
    <div className="container">
      <div className="initial-position">
        <button onClick={redirect} className="btn-default" type="submit">Entrar com um e-mail</button>
        <div className="social-container">
          <p>Facebook</p>
          <span></span>
          <p className="gl">Google</p>
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
