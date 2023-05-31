import React from 'react'
import { useState, useContext} from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import Endscreen from './Components/Endscreen';
import { QuizContext } from './Helper/Contexts';
import './App.css'
function App() {
  const [state,setState] = useState("menu")
  const [score,setScore] = useState(0);

  return (
    <div className='App'>
    <h1>Quiz App</h1>
    <QuizContext.Provider value={{state,setState,score,setScore}}>
      {state==="menu" && <MainMenu />}
      {state==="quiz" && <Quiz />}
      {state==="endscreen" && <Endscreen/>}
      </QuizContext.Provider>
    </div>
  )
}

export default App
