import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"my",
    age:21
  }
  return (
    <>
    
   <Card channel="Hi" arr={myobj}/>
   <Card channel="Pi"/>
     </>
  )
}

export default App
