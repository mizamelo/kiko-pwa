import React from 'react';
import Input from '../../components/components/InputComponent';
import './styles.scss';

// import { Container } from './styles';

export default function Register() {
  return (
    <div className="container">
      <div className="register-position">
        <form>
          <Input type={"text"} name={"name"} title={"Nome"}/>
          <Input type={"email"} name={"email"} title={"E-mail"}/>
          <Input type={"password"} name={"password"} title={"Senha"}/>
          <Input type={"password"} name={"password"} title={"Repetir Senha"}/>
          <button className="btn-default" type="submit">Solicitar</button>
        </form>
        <div className="complementar-text-container">
          <p>Já sou cadastrado? <span className="default-link">Login</span></p> 
        </div>
      </div>
    </div>
  );
}
