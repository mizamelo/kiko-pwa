import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import back from '../../assets/back.svg';
import './styles.scss';
import Menu from '../../components/Menu';

export default function Details(props) {
  const { history: { location } } = props;
  const [course, setCourse] = useState([]);
  
  useEffect(() => {
    async function getCourse() {
      const { params: { id } } = props.match;
      const { data: { data: course } } = await api.get(`/courses/${id}`);

      setCourse(course);
    }

    getCourse()
  }, [props.match]);

  return (
    <div className="details">
      <div className="header" style={{ background: location.cor || '#F6C543' }}>
        <Link to="/courses">
          <img src={back} alt="Voltar"/>
        </Link>
        <p>{course.title}</p>
      </div>


      <div className="body container">
        <p>{course.description}</p>
        <p className="body_p">{course.body}</p>
        <button>Proximo</button>
      </div>
      <Menu />
    </div>
  );
}
