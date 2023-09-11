import React from 'react'
import '../Components/Button.css'
const Button = (props) => {
  return (
    <a href={props.href} className='btn'>
    <p>{props.text}</p>
    {props.icon}
    

  </a> )
  
}

export default Button
