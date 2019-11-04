import React from 'react';
import Input from '../../components/components/InputComponent';
import './styles.scss';

// import { Container } from './styles';

export default function Initial() {
  return (
    <div className="container">
      <div className="initial-position">
        <button className="btn-default" type="submit">Entrar com um e-mail</button>
        <div className="social-container">
          <p>Facebook</p>
          <span></span>
          <p>Google</p>
        </div>
        <div className="complementar-text-container">
          <p>JJá tem uma conta? <span className="default-link">Login</span></p> 
        </div>
      </div>
    </div>
  );
}
