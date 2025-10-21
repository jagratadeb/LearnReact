import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  let addValue = () =>
  {
    console.log(counter);
    counter = counter + 1;
    setCounter(counter);
  }

  let subtractVaue = () =>
  {
    console.log(counter);
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={subtractVaue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
