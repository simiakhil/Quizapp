import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{width:'1000px',height:'550px',border:'1px solid black',margin:'0 auto'}}>
    <div style={{width:'500px',height:'100px',textAlign:'center',margin:'0 auto'}}>
      <h1 style={{backgroundColor:'black',color:'white'}}>Quizz App</h1>
      <Quiz/>

    </div>
  
    </div> 
     
    </>
  )
}

export default App
