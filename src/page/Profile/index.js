import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
// import Img from 'react-image'

import api from '../../services/api';
import profile from '../../assets/profile-i.svg';
import './styles.scss';
import Menu from '../../components/Menu';

export default function Profile(props) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const id = localStorage.getItem('@kiko-id');
      let profile;

      if (!localStorage.getItem('@kiko-profile')) {
        const { data: { user } } = await api.post('/sessions/me', { id });
        profile = user;
        localStorage.setItem('@kiko-profile', JSON.stringify(profile));
      } else {
        const local = localStorage.getItem('@kiko-profile');
        profile = JSON.parse(local);
      }

      setUser(profile);
      setLoading(false);
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
        <img src={profile} alt="Profile"/>
        {!loading ? (
          <>
            <p>{!!user.name && user.name}</p>
            <p>{!!user.email && user.email}</p>
          </>
        ) : (
          <ContentLoader
            height={70}
            width={600}
            speed={1}
            primaryColor="#425f80"
            secondaryColor="#022045"
          >
            <rect x="30%" y="20" rx="1" ry="1" width="250" height="10" />
            <rect x="30%" y="60" rx="1" ry="1" width="250" height="10" />
          </ContentLoader>
        )}
        <button onClick={logout}>Sair</button>
      </div>
      <Menu />
    </>
  );
}
