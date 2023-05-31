import React from 'react'
import { useState } from 'react'
import { Questions } from '../Helper/QuestionBank';
import { useContext } from 'react';
import { QuizContext } from '../Helper/Contexts';

const Quiz = () => {
    const [currQues,setCurrQues] = useState(0);
    const [optionChoosen,setOptionChoosen] = useState("");
    const {score,setScore,setState} = useContext(QuizContext)
    const nextQuestion = () =>{
        if(Questions[currQues].answer===optionChoosen){
            setScore(score+1);
        }
       
        setCurrQues(currQues+1);
    };
    const FinishQuiz = () =>{
        if(Questions[currQues].answer===optionChoosen){
            setScore(score+1);
        }
        setState("endscreen");
    }
  return (
    <div className='Quiz'>
        <h1>{Questions[currQues].prompt}</h1>
        <div className='options'>
        <button onClick={()=> setOptionChoosen("A")}>{Questions[currQues].OptionA}</button>
        <button onClick={()=> setOptionChoosen("B")}>{Questions[currQues].OptionB}</button>
        <button onClick={()=> setOptionChoosen("C")}>{Questions[currQues].OptionC}</button>
        <button onClick={()=> setOptionChoosen("D")}>{Questions[currQues].OptionD}</button>
        </div>
        {currQues=== Questions.length-1 ?(
            <button onClick={FinishQuiz}>Finish Quiz</button>
        ):(
            <button onClick={nextQuestion}>Next Question</button>
        )}
    </div>
  )
}

export default Quiz
