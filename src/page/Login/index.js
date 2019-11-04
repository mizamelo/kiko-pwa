import React from 'react';
import Input from '../../components/components/InputComponent';

// import { Container } from './styles';

export default function Login() {
  return (
    <div className="container">
      <Input name={"name"} title={"Nome"}/>
      <Input name={"name"} title={"E-mail"}/>
    </div>
  );
}
