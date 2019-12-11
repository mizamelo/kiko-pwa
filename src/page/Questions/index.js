import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentLoader from 'react-content-loader';
import Img from 'react-image'
import Quiz from 'react-quiz-component';

// import api from '../../services/api';
import back from '../../assets/back.svg';
import './styles.scss';
import Menu from '../../components/Menu';

export default function Questions(props) {
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

  const quiz =  {
    "quizSynopsis": "Chegou a hora de você testar seus conhecimentos. Vamos lá?!",
    "questions": [
      {
        "question": "Para você se cadastrar no Tesouro Direto basta possuir ____",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "CPF e pouco mais de 30 reais",
          "Identidade e mais de 100 reais",
          "A partir de 1000 reais",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Resposta correta. Bom trabalho.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Você só precisa de 30 reais e um cpf para poder se cadastrar no Tesouro. \\o/",
        "point": "20"
      },
      // {
      //   "question": "ReactJS is developed by _____?",
      //   "questionType": "text",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "Google Engineers",
      //     "Facebook Engineers"
      //   ],
      //   "correctAnswer": "2",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "20"
      // },
      // {
      //   "question": "ReactJS is an MVC based framework?",
      //   "questionType": "text",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "True",
      //     "False"
      //   ],
      //   "correctAnswer": "2",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "10"
      // },
      // {
      //   "question": "Which of the following concepts is/are key to ReactJS?",
      //   "questionType": "text",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "Component-oriented design",
      //     "Event delegation model",
      //     "Both of the above",
      //   ],
      //   "correctAnswer": "3",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "30"
      // },
      // {
      //   "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      //   "questionType": "photo",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "https://dummyimage.com/600x400/000/fff&text=A",
      //     "https://dummyimage.com/600x400/000/fff&text=B",
      //     "https://dummyimage.com/600x400/000/fff&text=C",
      //     "https://dummyimage.com/600x400/000/fff&text=D"
      //   ],
      //   "correctAnswer": "1",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "20"
      // },
      // {
      //   "question": "What are the advantages of React JS?",
      //   "questionType": "text",
      //   "answerSelectionType": "multiple",
      //   "answers": [
      //     "React can be used on client and as well as server side too",
      //     "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
      //     "React components have lifecycle events that fall into State/Property Updates",
      //     "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
      //   ],
      //   "correctAnswer": [1, 2, 4],
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "20"
      // },
    ],
    "appLocale": {
      "landingHeaderText": "Total de questões: <questionLength>",
      "question": "Questão",
      "startQuizBtn": "Iniciar Quiz",
      "resultFilterAll": "Todos",
      "resultFilterCorrect": "Correto",
      "resultFilterIncorrect": "Incorreto",
      "singleSelectionTagText": "Única",
      "nextQuestionBtn": "Próximo",
      "pickNumberOfSelection": "Escolha",
      "resultPagePoint": "Sua pontuação é <correctPoints> de <totalPoints>.",
      "resultPageHeaderText": "Você completou o Quiz e acertou <correctIndexLength> de <questionLength> questões."
    }
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
            <Quiz 
              quiz={quiz} 
              shuffle={true} 
              style={{ width: '100% !important' }}
            />
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
      </div>
      <Menu />
    </div>
  );
}