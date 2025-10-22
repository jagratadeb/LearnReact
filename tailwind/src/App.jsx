import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj  ={
    name: "Jagrata",
    age: 21
  }

  let newArr = [1,2,3];

  return (
    <>
      <h1 className='bg-blue-400 text-white p-4 rounded-xl'>Tailwind</h1>

      <Card userName= "Jagrata Deb" someObj = {myObj} someArr = {newArr}/>
      <Card />
      
    </>
  )
}

export default App
