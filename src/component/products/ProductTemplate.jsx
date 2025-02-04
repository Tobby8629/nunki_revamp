import React, { useState } from 'react'
import template from './template.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Typewriter from '../Typewiter/Typewriter';


const ProductTemplate = ({headerImage, text,form, NB, children}) => {
  return (
    <section className={template.section}>
      <main className={template.main}>
        <div className={template.mainimage}>
          <img src={headerImage} alt='logo' />
        </div>
        <div className={template.mainText}>
          <Typewriter text={text} form={form}  NB={NB}/>
        </div>
      </main>
      {children}
    </section>
  )
}

export default ProductTemplate