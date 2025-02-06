import React, { useEffect, useRef, useState } from 'react'
import style from './dropdown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({e, options, form, setform, inputWrapper, inputStyle, other}) => {
  const opt = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (opt.current && !opt.current.contains(event.target)) {
        setoption(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const [option, setoption] = useState(false)
  const handleChange = (e) => {
      const{name, value} = e.target.dataset
      setform({...form, [name]: value})
      setoption(false)
  }
  return (
    <div ref={opt} className={`${inputWrapper} ${style.wrapper}`}>
      <input className={`${style.input} ${inputStyle}`} 
      onClick={() => setoption(!option)} 
      value={options.find((ex) => ex.value == form[e.name])?.name} 
      placeholder={e.placeholder} 
      readOnly
      />
      <span className={style.icon}>
        <FontAwesomeIcon icon={option ? faAngleUp : faAngleDown} color='rgb(131, 130, 130)' size='10'  />
      </span>
      <div className={`${style.option} ${option ? style.active : ""}`}>
         <p data-name={e.name} data-value="" onClick={handleChange} >{other || e.placeholder}</p>
        {options.map((option, index) => (
          <p style={index === options.length - 1 ? {borderBottom: 0} : {}} 
            key={option.value}
            data-name={e.name} 
            data-value={option.value}
            onClick= {handleChange}
          >
            {option.name}
          </p>
        ))}
      </div>  
    </div>
  )
}

export default Dropdown