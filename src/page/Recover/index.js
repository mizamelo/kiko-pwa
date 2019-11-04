import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/components/InputComponent';
import './styles.scss';

// import { Container } from './styles';

export default function Recover() {
  return (
    <div className="container">
      <div className="login-position">
        <form>
           <Input type={"email"} name={"email"} title={"E-mail"}/>
          <button className="btn-default" type="submit">Recuperar Senha</button>
        </form>
        <div className="complementar-text-container">
          <p>Já sou cadastrado? {' '}
            <Link to="/login" className="default-link">Login</Link>
          </p> 
        </div>
      </div>
    </div>
  );
}
