import React from 'react'
import { useContext } from "react"
import { QuizContext } from '../Helper/Contexts'

const MainMenu = () => {
    const { state, setState } = useContext(QuizContext);
  return (
    <div className='Menu'>
      <button onClick={() =>{
        setState("quiz")
      }}>Start Quiz</button>
    </div>
  )
}

export default MainMenu
