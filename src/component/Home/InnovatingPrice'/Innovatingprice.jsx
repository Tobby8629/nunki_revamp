import React from 'react'
import style from './Innovatingprice.module.css'
import ProductBox from './ProductBox'
import {  products } from '../../../assets/data'

const Innovatingprice = () => {
  const [showproduct, setShowproduct] = React.useState(3);
  const topPrices = products?.slice(0,showproduct)

  const loadMore = () => {
    setShowproduct((prev) => prev + 3);
  }

  return (
    <section className={style.price}>
      <div className={style.headerText}>
        <h2>INNOVATIVE PRICING SOLUTIONS</h2>
        <p>
          we deliver comprehensive coverage tailored to your needs
          at remarkably affordable rates.
        </p>
      </div>
      <div className={style.textWrapper}>
        {topPrices?.map((price)=>(
          <ProductBox price={price} key={price?.name} desktop='500px' link={price?.link}/>
        ))}
      </div>
      {showproduct < products?.length && (
        <div className={style.loadmore}>
          <button onClick={loadMore}>Load More</button>
        </div>
      )}
    </section>
  )
}

export default Innovatingprice