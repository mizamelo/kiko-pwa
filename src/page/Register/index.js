import React from 'react';
import { Link } from 'react-router-dom';

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
          <p>Já sou cadastrado? {" "}
            <Link to="/login" className="default-link">Login</Link>
          </p> 
        </div>
      </div>
    </div>
  );
}
