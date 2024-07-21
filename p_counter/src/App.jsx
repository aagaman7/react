import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let[counter,setCounter]=useState(15)


  const addValue=()=>{
    if(counter>19)
      return;
    counter=counter+1;
    setCounter(counter);
  }
  const removeValue=()=>{
    if(counter<1 ){
      return ;
    }
    counter=counter-1;
    setCounter(counter);
  }
  return (
    <>
      <h1>Hello </h1>
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <br></br>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
