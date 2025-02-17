import { useState } from 'react'
import { products } from '../../assets/data'
import ProductBox from '../../component/Home/InnovatingPrice\'/ProductBox'
import product from './Getprices.module.css'
import PageWrapper from '../../component/Layout/pageWrapper/PageWrapper'

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

  return (
    <PageWrapper className={product.prices}> 
      <h2>Choose A product to Continue</h2>
      <main className={product.main}>
        {
          prices?.map((price)=>
          <ProductBox key={price?.name} price={price} 
          desktop='32%'
          link={price?.link}
          // color="#ffff"
          />
          )
        }
      </main>
      <div className={product.btn}>
        {value >= products.length ? null : <button onClick={loadmore}>show more</button>}
        {value >= 9 && <button onClick={showless}> show less </button>}
      </div>
    </PageWrapper>
  )
}

export default GetPrices