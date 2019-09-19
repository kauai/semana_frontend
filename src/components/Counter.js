import React from 'react';
const counter = (props) => {
  console.log(props)
    return (
        <div>
          <span>{props.count}</span>
          <button onClick={() => props.increment() }>+</button>
          <button onClick={() => props.decrement() }>-</button>
          <button onClick={() => props.reset() }>reset</button>
        </div>
    )
}

export default counter