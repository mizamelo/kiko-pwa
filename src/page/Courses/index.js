import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

import api from '../../services/api';
import Menu from '../../components/Menu';
import './styles.scss';

export default function Courses(props) {
  const [taxa, setTaxa] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTax() {
      // const { data: { data } } = await api.get('/taxas');
      const { data: { data: courses } } = await api.get('/courses');

      // setTaxa(data.results);
      setCourses(courses);
      setLoading(false);
    }

    getTax()
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
    }

    let path = {
      pathname: `/${course.id}/course`,
      cor
    };

    props.history.push(path);
    //to={`/course/${course.id}`}
  }

  return (
    <div className="container home courses">
      {loading ? (
        <>
          <ContentLoader
            height={70}
            width={600}
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
              height={160}
              width={400}
              speed={1}
              primaryColor="#f9f7fa"
              secondaryColor="#dad8db"
            >
              <rect x="-15" y="1" rx="0" ry="0" width="400" height="135" /> 
              <rect x="290" y="75" rx="0" ry="0" width="0" height="0" /> 
              <rect x="343" y="86" rx="0" ry="0" width="0" height="0" />
            </ContentLoader>
          <ContentLoader 
              height={160}
              width={400}
              speed={1}
              primaryColor="#f9f7fa"
              secondaryColor="#dad8db"
            >
              <rect x="-15" y="1" rx="0" ry="0" width="400" height="135" /> 
              <rect x="290" y="75" rx="0" ry="0" width="0" height="0" /> 
              <rect x="343" y="86" rx="0" ry="0" width="0" height="0" />
            </ContentLoader>
          <ContentLoader 
              height={160}
              width={400}
              speed={1}
              primaryColor="#f9f7fa"
              secondaryColor="#dad8db"
            >
              <rect x="-15" y="1" rx="0" ry="0" width="400" height="135" /> 
              <rect x="290" y="75" rx="0" ry="0" width="0" height="0" /> 
              <rect x="343" y="86" rx="0" ry="0" width="0" height="0" />
            </ContentLoader>
        </>
      ) : (
        <>
          <div className="taxa">
            <p>Taxa Selic</p>
            <h1>4,90</h1>
          </div>
          {!!courses.length ? (
            <ul className="list-courses">
              {courses.map((course, i) => (
                <li style={{ background: (i%2 ? `linear-gradient(#5da1f0e8, #5da1f0de), url(${course.image}) cover` : `linear-gradient(#f6c543f2, #f6c543e3), url(${course.image})`) }}>
                  <button style={{ background: 'transparent', height: '100%', width: '90%' }} key={course.id} onClick={() => handleCourse(course, (i%2 ? '#5DA1F0' : '#F6C543'))}>
                  <h5>{course.title}</h5>
                  <p>{course.description}</p>
                  </button>
                </li>
              ))}
            </ul>
          ): (
            <span className="nothing">Nenhum curso cadastrado</span>
          )}
        </>
      )}
      <Menu />
    </div>
  );
}
