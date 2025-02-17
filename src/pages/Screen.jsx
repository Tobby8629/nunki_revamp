// import { products } from "../assets/data";
// import Product from "../component/products/Product";
import style from "./Telemedicine/Tele.module.css";
import productstyle from "../component/products/product.module.css";
import { useNavigate } from "react-router-dom";
import { telemedSteps } from "../constants";
import PageWrapper from "../component/Layout/pageWrapper/PageWrapper";
import { useEffect, useState } from "react";
import { products } from "../assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Screen = () => {
  const navigate = useNavigate(); 
  const [steps, setSteps] = useState(false)
  const product = products.find((e) => e.id === 3);
  const redirect = () => {
    steps ?
    navigate("/products/tele_medicine/insure") : setSteps(true)
  };
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[steps])

  return (
    <PageWrapper>
      {steps ? 
      <div className={`${style.wrap}`}>
          <>
            <h2>TELE MEDICINE</h2>
            <h4>How to get Telemedicine</h4>
            <p>Here are the steps to getting Telemedicine:</p>
            <ul className={style.benefits}>
              {telemedSteps?.benefits?.map((benefit, index) => (
                <li key={benefit?.id}>
                  <span className={productstyle.check}>{index + 1}</span>
                  <span className={productstyle.benefit}>
                    {benefit?.benefit}
                    {benefit?.img && (
                      <div className={productstyle.benefitImage}>
                        <img src={benefit?.img} alt="step" />
                      </div>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className={style.continue}>
              <button onClick={redirect}>Continue</button>
            </div>
          </>
      </div> :
      <div className={`${style.wrap}`}>
          <>
            <h2>TELE MEDICINE</h2>
            <h4>{product?.sub}</h4>
            <p>{product?.text}</p>
            <ul className={style.benefits}>
              {product?.benefits?.map((benefit) => (
                <li key={benefit?.id}>
                  <span className={productstyle.check}>
                    <FontAwesomeIcon icon={faCheck} color="white" size="20px"/>
                  </span>
                  <span className={productstyle.benefit}>
                    {benefit?.benefit}
                    {benefit?.img && (
                      <div className={productstyle.benefitImage}>
                        <img src={benefit?.img} alt="step" />
                      </div>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className={style.continue}>
              <button onClick={redirect}>Continue</button>
            </div>
          </>
      </div>
      }
      </PageWrapper>
  );
};

export default Screen;

 {/* <div className="desktop">
        <Product product={product} benefitHeader={product.benefit_header}/>
        <div className={style.loadmore}>
          <button onClick={redirect}>Continue</button>
        </div>
      </div> */}
        {/* <p>
          The Nunki Virtual Healthcare Membership is a subscription-based
          service that provides access to a team of healthcare professionals.
        </p> */}

