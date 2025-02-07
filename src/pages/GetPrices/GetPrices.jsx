import React, { useState } from 'react'
import { products } from '../../assets/data'
import ProductBox from '../../component/Home/InnovatingPrice\'/ProductBox'
import product from './Getprices.module.css'

const GetPrices = () => {
  const [value, setvalue] = useState(6)
  const prices =  products.slice(0, value) 
  const loadmore = () => {
    if(value + 1 <= products.length){
      setvalue(value+3)
    }
  }

  const showless = () => {
    if(value > 6) {
      setvalue(value - 3)
    }
  }



  console.log(value)
  return (
    <section className={product.wrapper}> 
      <h2>Choose A product to Continue</h2>
      <main className={product.main}>
        {
          prices?.map((price)=>
          <ProductBox key={price?.name} price={price} 
          desktop='32%'
          // color="#ffff"
          />
          )
        }
      </main>
      <div className={product.btn}>
        {value >= products.length ? null : <button onClick={loadmore}>show more</button>}
        {value >= 9 && <button onClick={showless}> show less </button>}
      </div>
    </section>
  )
}

export default GetPrices