import style from './product.module.css'
import ProductBox from '../Home/InnovatingPrice\'/ProductBox'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Product = ({product}) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(product?.route);
  };
  return (
    <main className={style.main}>
      <div className={style.top}>
        <div className={style.header}>
          <h2>{product?.name}</h2>
          <h4>{product?.sub}</h4>
          <p className={style.sub_name}>{product?.sub_name}</p>
          <p className={style.sub_name}>{product?.phone_number}</p>
          <p className={style.text}>{product?.text}</p>
        </div>
        
        <div className={style.image}>
          {product?.productImage && <img src={product?.productImage} alt={product.name} />}
        </div>

        <p className={style.text1}>{product?.text}</p>
      </div>
    
      <div className={style.down}>
        <div className={style.benefi}>
        
          <div className={style.benefits}>
            <h2>Service Benefits</h2>
            <ul>
              {product?.benefits?.map((benefit)=>(
                <li key={benefit?.id}>
                  {benefit?.table_head ? 
                    <BenefitTable benefit={benefit}/>: 
                    <>
                      <span className={style.check}>
                       <FontAwesomeIcon icon={faCheck} size='20' color='white'  />
                      </span>  
                      <span className={style.benefit}>
                        {benefit?.benefit}
                        <div className={style.benefitImage}>
                          {benefit?.img && <img src={benefit?.img} alt="image" />}
                      </div>
                      </span>
                      
                    </>
                  }
                </li>
              ))}
            </ul>
            <div className={style.continue}>
              <button onClick={redirect}>Continue</button>
            </div>
          </div>


        </div>
        {/* {mobile ? 
          product?.funeralSection ? 
          <FuneralTables funeralSection={product.funeralSection} select={select} changeselect={changeselect} /> : null 
        : null } */}


        
        <div className={style.card} >
          <ProductBox price={product} 
          styles={{backgroundColor:'var(--primary-font-color)' }} color="white" 
          dark={true} min_desk={"100%"} desktop={"100%"}
          link={product?.route}
          />
        </div>

      </div>
      {/* {!mobile ? 
          product?.funeralSection ? 
          <FuneralTables funeralSection={product.funeralSection} select={select} changeselect={changeselect} /> : null 
      : null } */}
    </main>
  )
}

Product.propTypes = {
  product: PropTypes.object,
  link: PropTypes.string
}

export default Product


export const BenefitTable = ({benefit}) => {
   return(
    <div className={style.table_wrapper}>
      <table>
        <thead>
          <tr>
            {benefit.table_head.map((header)=>(
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {benefit.table_body?.map((row, row_index)=>(
              <tr key={row_index}>
                {benefit.table_head.map((header)=>(
                  <td key={header}>{row[header.toLowerCase().replace(/\s+/g, '_')] || '-'}</td>
                ))}
              </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
   )
}
 BenefitTable.propTypes = {
  benefit: PropTypes.object
 }


//  const [select, setselect] = useState('A')
//   const mobile = useMobileView()
  
//   const changeselect = useCallback((e) => {
//     const {value} = e.target
//     setselect((prev)=> prev === value ? null : value)
//   },[select])