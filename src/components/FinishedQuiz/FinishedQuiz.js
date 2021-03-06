import React from 'react';
import './FinishedQuiz.css';
import Button from "../../UI/Button/Button";
import {Link} from "react-router-dom";


export const FinishedQuiz = ({result, quiz, onRetry}) => {
  //считаем кол-во правильных ответов
  const successCount = Object.keys(result).reduce((total, key) => {
    if(result[key] === 'success') total++;

    return total;
  }, 0)

  const resultsBody = () => quiz.map((quizItem, index) => {
    const error = result[quizItem.id] === 'error';

    const iconClassName = [
      'fa',
       error ? 'fa-times' : 'fa-check',
      'finished-quiz__icon',
      `finished-quiz__icon_${error ? 'error' : 'success'}`
    ].join(' ')

    return (
      <li key={index}>
        <strong>{index + 1}</strong>.&nbsp;
        {quizItem.question}
        <i className={iconClassName} />
      </li>
    )
  })

  return(
    <div className="finished-quiz">
      <ul className={'finished-quiz__items'}>
        {resultsBody()}
      </ul>

      <p>
        Правильно {successCount} из {quiz.length}
      </p>

      <div>

        <Button
          onClick={onRetry}
          type={'primary'}
        >Повторить</Button>

        <Link to={'/'}>
          <Button
            onClick={onRetry}
            type={'success'}
          >Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
}
