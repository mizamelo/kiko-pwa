import React from 'react';
import Input from '../../components/components/InputComponent';
import './styles.scss';

// import { Container } from './styles';

export default function Login() {
  return (
    <div className="container">
      <form className="login-position">
        <Input type={"text"} name={"name"} title={"E-mail"}/>
        <Input type={"password"} name={"name"} title={"Password"}/>
        <button className="btn-default" type="submit">Solicitar</button>
      </form>
    </div>
  );
}
