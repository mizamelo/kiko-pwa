import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Img from 'react-image'

import logo from '../../assets/logo-light.png';
import api from '../../services/api';
import Input from '../../components/components/InputComponent';
import './styles.scss';

export default function Register(props) {
  async function handleRegister(event) {
    event.preventDefault();

    const { 
      name: { value: name },
      email: { value: email }, 
      password: { value: password },
      repeat_password: { value: repeat_password }
    } = event.target;

    if (password !== repeat_password) {
      toast.error('As senhas não conferem');
      return false;
    }

    const response = await api.post('sessions/register', { email, password, name });
    localStorage.setItem('@kiko-token', response.data.token);
    localStorage.setItem('@kiko-id', response.data.id);
    props.history.push('/');
  }

  return (
    <div className="container">
      <div className="logo-login" >
        <Img height="170" width="170" src={logo} />
      </div>
      <div className="register-position">
        <form onSubmit={handleRegister} method="POST">
          <Input type="text" required name="name" title={"Nome"}/>
          <Input type="email" required name="email" title={"E-mail"}/>
          <Input type="password" required name="password" title={"Senha"}/>
          <Input type="password" required name="repeat_password" title={"Repetir Senha"}/>
          <button className="btn-default" type="submit">Registrar</button>
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
