import React from 'react';
import Input from '../../components/components/InputComponent';
import './styles.scss';

// import { Container } from './styles';

export default function Login() {
  return (
    <div className="container">
      <div className="login-position">
        <form>
          <Input type={"text"} name={"email"} title={"E-mail"}/>
          <Input type={"password"} name={"password"} title={"Password"}/>
          <button className="btn-default" type="submit">Entrar</button>
        </form>
        <div className="complementar-text-container">
          <p>JEsqueceu a senha? <span className="default-link">Recuperar</span></p> 
        </div>
      </div>
    </div>
  );
}
