import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5
  const incValue = () => {
      if (counter < 20) {
      setCounter(counter + 1)
      }
  }

  const decValue = () => {
    if (counter > 0){
    setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={incValue}>Increase value</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease value</button> 
    </>
  )
}

export default App
