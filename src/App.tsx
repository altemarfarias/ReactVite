import './App.css'
import { useState } from 'react'

function FrontBeginnersApp() {

  const [count, setCount] = useState(0)
  const [valueInput, setValueInput] = useState('Altemar')

  const add = () => {
    setCount(count + 1)
    console.log(count)
  }

  const onChangeInput = (event) => {
    setValueInput(event.target.value)
  }

  return (
    <div className='App'>
      <h1>Front Beginners</h1>
      <h3>{count}</h3>
      <button onClick={add}>Adicionar</button>
      <div>
        <input onChange={onChangeInput}></input>
      </div>
      <h3>{valueInput}</h3>
    </div>
    

)
}

export default  FrontBeginnersApp
