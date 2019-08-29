import React from 'react';

const Display = (props) => {

  return (
    <div>
      display
      {props.messages.map((message, idx) => {
        return <p key={idx}>{message}</p>
      })}
    </div>
  )
}

export default Display;