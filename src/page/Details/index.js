import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentLoader from 'react-content-loader';
import Img from 'react-image'

// import api from '../../services/api';
import back from '../../assets/back.svg';
import './styles.scss';
import Menu from '../../components/Menu';

export default function Details(props) {
  const { history: { location } } = props;
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function getCourse() {
      const { params: { id } } = props.match;

      const courses = JSON.parse(localStorage.getItem('@kiko-courses'));
      const [course] = courses.filter(c => c.id === parseInt(id));
      
      setCourse(course);
      setLoading(false);
    }

    getCourse()
  }, [props.match]);

  function toQuestions() {
    props.history.push(`/${course.id}/questions`)
  }

  return (
    <div className="details">
      <div className="header" style={{ background: location.cor || '#F6C543' }}>
        <Link to="/courses">
          <Img src={back} alt="Voltar"/>
        </Link>
        <div className="title">
          {!loading ? (
            <p>{course.title}</p>
          ) : (
              <ContentLoader 
                height={40}
                width={450}
                speed={1}
                primaryColor="#425f80"
                secondaryColor="#022045"
                style={{ position: 'absolute' }}
              >
                <rect x="0" y="25" rx="3" ry="3" width="170" height="10" /> 
              </ContentLoader>
            )}
        </div>
      </div>


      <div className="body container">
        {!loading ? (
          <>
            <p>{course.description}</p>
            <p className="body_p">{course.body}</p>
          </>
        ) : (
          <ContentLoader 
            height={400}
            width={400}
            speed={1}
            primaryColor="#425f80"
            secondaryColor="#022045"
          >
            <rect x="2" y="18" rx="3" ry="3" width="250" height="10" /> 
            <rect x="4" y="60" rx="0" ry="0" width="100%" height="400" /> 
            <rect x="60" y="57" rx="0" ry="0" width="0" height="0" /> 
            <rect x="98" y="63" rx="0" ry="0" width="0" height="0" /> 
           </ContentLoader>
        )}
        <button onClick={toQuestions}>Proximo</button>
      </div>
      <Menu />
    </div>
  );
}
