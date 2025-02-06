import React from 'react'
import style from './input.module.css'

const Input = ({name, form, setform, type, id, placeholder, className, wrapperStyle, wInlinestyle, inputStyle}) => {
 const handleChange = (e) => {
    const{name, value} = e.target
   setform({...form, [name]: value})
 }
  return (
    <div className={`${style.inputWrapper} ${wrapperStyle}`} style={wInlinestyle}>
      <input 
      name={name}
      id={id}
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      className={`${style.inputStyle} ${inputStyle} ${className}`}
      /> 
    </div>
    
  )
}

export default Input