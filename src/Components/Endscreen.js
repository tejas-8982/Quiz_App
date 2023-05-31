import React from 'react'
import { useContext } from "react"
import { QuizContext } from '../Helper/Contexts'
import { Questions } from '../Helper/QuestionBank'

const Endscreen = () => {
  const {score, setScore,setState} = useContext(QuizContext);
  const restartQuiz = () =>{
    setScore(0);
    setState("menu");
  }
  return (
    <div className='EndScreen'>
      <h1>Quiz Finished</h1> 
      <h3> {score} / {Questions.length} </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default Endscreen
