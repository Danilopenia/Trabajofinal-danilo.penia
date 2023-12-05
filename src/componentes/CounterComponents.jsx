import React from 'react'
import useCounter from './useCounter.js'

const counterComponents = () => {


    const {count, increment, decrement} = useCounter(0, 1)
  return (
    <div>
        <button onClick={increment}>+</button>
        <h2>{count}</h2>
        <button onClick={decrement}>-</button>
        
    </div>
  )
}

export default counterComponents