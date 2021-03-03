import React, { useState } from 'react'

function Counter() {
  const [Count, setCount] = useState(0)

  const onIncrease = () => {
    setCount(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setCount(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter
