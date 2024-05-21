import React, { useState } from 'react'
import questions from '../question.json'


function Quiz() {
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [score, setScore] = useState(0); 
  const [showFeedback, setShowFeedback] = useState('False'); 
  const [end,setend] = useState(false)

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1){
    setCurrentQuestion(currentQuestion + 1)
    setSelectedAnswer(null);
    setCorrectAnswer('');
    setShowFeedback(false)
  } else {
      setend(true)
  }
  }

  const handleOption = (option) => {
    setSelectedAnswer(option)
    setShowFeedback(false)
    
  }

  const checkAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].ans) {
      setShowFeedback(true); 
    } else {
    setShowFeedback(true); 
    }
  };


  const incrementScore = () => {
    if (selectedAnswer === questions[currentQuestion].ans) {
      setScore(score + 1); 
    }
  };

 

  return (


    <>
  
    <div>{questions[currentQuestion].question}</div>
    <div>
      {
        questions[currentQuestion].options.map((optn)=>(

          <ul style={{display:'flex',width:'100%',height:'50px',padding:'1px', backgroundColor: selectedAnswer === optn ? 'lightblue' : 'gray', cursor: 'pointer',border:'2px solid blue'}} on onClick= {() => handleOption(optn)}>
            <li>{optn}</li>
          </ul>

        ))
      }
    </div>


    {showFeedback && (
        <p style={{ color: selectedAnswer === questions[currentQuestion].ans ? 'green' : 'red' }}>
          {selectedAnswer === questions[currentQuestion].ans ? 'Correct!' : selectedAnswer===null? '' :'Incorrect'}
        </p>
      )}

    <button
        type="button"
        style={{ backgroundColor: 'blue', width: '60px', height: '30px', borderRadius: '5px', marginRight: '10px' }}
        onClick={checkAnswer}
        disabled={selectedAnswer === null || showFeedback} 
      >
        Check
      </button>

      <button
        type="button"
        style={{ backgroundColor: 'blue', width: '60px', height: '30px', borderRadius: '5px', marginRight: '10px' }}
        onClick={() => {
          checkAnswer();
          incrementScore(); 
          nextQuestion();
        }}
        disabled={selectedAnswer === null || showFeedback} 
      >
        Next
      </button>
 
      
    
    <div>Score: {score}</div>
  
    {
      end&&(<p style={{color:'red'}}>END OF QUIZ</p>)
    }
    </>
  )
}

export default Quiz