import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ContentLoader from 'react-content-loader';
import { 
  parseISO,
  formatDistance,
} from 'date-fns';

import pt from 'date-fns/locale/pt';

import completed from '../../assets/completed.svg';
import Menu from '../../components/Menu';
import './styles.scss';

function Home(props) {
  const [taxa, setTaxa] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastCourse, setLastCourse] = useState([]);

  useEffect(() => {
    async function getTax() {
      const { data: { data } } = await api.get('/taxas');
      const { data: { data: courses } } = await api.get('/courses');

      setTaxa(data.results);
      setCourses(courses);
      setLoading(false);
    }

    getTax()
  }, []);

  useEffect(() => {
    const local = localStorage.getItem('@kiko-course');
    let parse = JSON.parse(local) || [];

    setLastCourse(parse);
  }, []);

  function handleCourse(course, cor) {
    const local = localStorage.getItem('@kiko-course');
    let parse = JSON.parse(local) || [];

    if (!parse.filter(e => e.id === course.id).length) {
      parse = [...parse, course];

      parse.map(item => {
        if (item.id === course.id) {
          item.date_access = new Date().toISOString();
          item.cor = cor;
        }

        return item;
      });

      localStorage.setItem('@kiko-course', JSON.stringify(parse));
      
      setLastCourse(parse);
    }

    let path = {
      pathname: `/${course.id}/course`,
      cor
    };

    props.history.push(path);
    //to={`/course/${course.id}`}
  }

  function formatData(data) {
    const firstDate = parseISO(data);
    const secondDate = parseISO(new Date().toISOString());

    const relative = formatDistance(
      firstDate,
      secondDate,
      {locale: pt}
    );

    return relative;
  }

  return (
    <div className="container home">
      {!loading ? (
        <>
          <div className="taxa">
            <p>Taxa Selic</p>
            <h1>{taxa[0] && taxa[0].selic}</h1>
          </div>

          <div className="notice">
            <p>Noticia de alguma coisa de tesouro</p>
          </div>

          <div className="last">
            <p>Recentes</p>
            {!!lastCourse.length ? (
              <ul>
                {lastCourse.map((course, i) => (
                  <button key={course.id} onClick={() => handleCourse(course, course.cor)}>
                    <li style={{ background: course.cor }}>
                      <h5>{course.title}</h5>
                      <p>{formatData(course.date_access)}</p>
                    </li>
                  </button>
                ))}
              </ul>
            ) : (
              <span className="nothing">Você ainda não iniciou nenhum curso</span>
            )}
          </div>

          <div className="courses">
            <p>Cursos</p>
            <ul>
              {courses.map((course, i) => (
                <button key={course.id} onClick={() => handleCourse(course, (i%2 ? '#5DA1F0' : '#F6C543'))}>
                  <li style={{ background: (i%2 ? '#5DA1F0' : '#F6C543') }}>
                    <h5>{course.title}</h5>
                    <p>{course.description}</p>
                    <span>
                      <img src={completed} alt="Completed"/>
                      100%
                    </span>
                  </li>
                </button>
              ))}
          
            </ul>
          </div>
      </>
    ) : (
      <>
        <ContentLoader
          height={70}
          width={400}
          speed={1}
          primaryColor="#f9f7fa"
          secondaryColor="#dad8db"
        >
          <rect x="0" y="40" rx="1" ry="1" width="250" height="10" />
        </ContentLoader>
        <ContentLoader
          height={80}
          width={400}
          speed={1}
          primaryColor="#f9f7fa"
          secondaryColor="#dad8db"
        >
          <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        </ContentLoader>

          <ContentLoader 
            height={80}
            width={400}
            speed={1}
            primaryColor="#f9f7fa"
            secondaryColor="#dad8db"
          >
            <rect x="0" y="12" rx="3" ry="3" width="400" height="50" />
          </ContentLoader>

          <ContentLoader 
            height={180}
            width={400}
            speed={1}
            primaryColor="#f9f7fa"
            secondaryColor="#dad8db"
          >
            <rect x="2" y="18" rx="3" ry="3" width="250" height="10" /> 
            <rect x="4" y="60" rx="0" ry="0" width="150" height="92" /> 
            <rect x="60" y="57" rx="0" ry="0" width="0" height="0" /> 
            <rect x="98" y="63" rx="0" ry="0" width="0" height="0" /> 
            <rect x="200" y="60" rx="0" ry="0" width="150" height="92" />
          </ContentLoader>

          <ContentLoader 
            height={400}
            width={400}
            speed={1}
            primaryColor="#f9f7fa"
            secondaryColor="#dad8db"
          >
            <rect x="1" y="14" rx="5" ry="5" width="220" height="10" /> 
            <rect x="3" y="36" rx="0" ry="0" width="310" height="300" /> 
            <rect x="290" y="75" rx="0" ry="0" width="0" height="0" /> 
            <rect x="347" y="36" rx="0" ry="0" width="45" height="300" />
          </ContentLoader>
      </>  
      )}
  
      <Menu />
    </div>
  );
}

export default Home;