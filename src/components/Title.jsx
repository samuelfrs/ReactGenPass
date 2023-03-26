import React from 'react'

function Title(props) {
  return (
    <h1 className="mt-48 text-4xl font-black text-white animate__animated  animate__pulse">{props.title}</h1>
  )
}

export default Title