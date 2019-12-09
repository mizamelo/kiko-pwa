import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import profile from '../../assets/profile-i.svg';
import './styles.scss';
import Menu from '../../components/Menu';

export default function Profile(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser() {
      const id = localStorage.getItem('@kiko-id');
      const { data: { user } } = await api.post('/sessions/me', { id });

      setUser(user);
    }

    getUser()
  }, []);

  function logout() {
    localStorage.removeItem('@kiko-token');
    props.history.push('/');
  }

  return (
    <>
      <div className="profile">
        {console.log(!!user.email)}
        <img src={profile} alt="Profile"/>
        <p>{!!user.name && user.name}</p>
        <p>{!!user.email && user.email}</p>
        <button onClick={logout}>Sair</button>
      </div>
      <Menu />
    </>
  );
}
