import React, { useState } from 'react'

const DynamicBox = ({ text }: { text: string; }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1 className="title">
        {text}, counter: {counter}
      </h1>
      <p className="subtitle">
        <button
          onClick={() => setCounter(counter + 1)}
          className="button"
        >
          Test
        </button>
      </p>
    </div>
  )
}

export default DynamicBox
