import React from 'react'

const StartedBtn = (props) => {
  return (
    <div className='start-btn-wrapper'>
      <button className='start-btn' onClick={()=>props.actions.nunki_product()}> get quote </button>
      <button className='start-btn'onClick={()=>props.actions.clientOptions()}>learn more</button>
    </div>
  )
}

export default StartedBtn
