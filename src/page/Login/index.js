import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image'

import logo from '../../assets/logo-light.png';
import api from '../../services/api';
import Input from '../../components/components/InputComponent';
import './styles.scss';


export default function Login(props) {

  async function doLogin(event) {
    event.preventDefault();
    const { email: { value: email }, password: { value: password } } = event.target;

    const response = await api.post('sessions', { email, password });
    localStorage.setItem('@kiko-token', response.data.token);
    localStorage.setItem('@kiko-id', response.data.id);
    props.history.push('/');
  }

  return (
    <div className="container">
      <div className="logo-login" >
        <Img height="170" width="170" src={logo} />
      </div>
      <div className="login-position">
        <form onSubmit={doLogin} method="POST">
          <Input type="email" required name="email" onChange={doLogin} title="E-mail"/>
          <Input type="password" required name="password" title="Password" />
          <button className="btn-default" type="submit">Entrar</button>
        </form>

        <div className="complementar-text-container">
          <p>Ainda não é cadastrado?{' '}
            <Link to="/register" className="default-link">Resgistrar-se</Link>
          </p> 
        </div>
      </div>
    </div>
  );
}
