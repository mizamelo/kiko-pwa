import React from 'react';
import Input from '../../components/components/InputComponent';
import './styles.scss';

// import { Container } from './styles';

export default function Recover() {
  return (
    <div className="container">
      <div className="login-position">
        <form>
          <Input type={"text"} name={"name"} title={"Nome"}/>
          <Input type={"email"} name={"email"} title={"E-mail"}/>
          <button className="btn-default" type="submit">Solicitar</button>
        </form>
        <div className="complementar-text-container">
          <p>Já sou cadastrado? <span className="default-link">Login</span></p> 
        </div>
      </div>
    </div>
  );
}
