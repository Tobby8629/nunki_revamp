// import { products } from "../assets/data";
// import Product from "../component/products/Product";
import style from "./Telemedicine/Tele.module.css";
import productstyle from "../component/products/product.module.css";
import { useNavigate } from "react-router-dom";
import { telemedSteps } from "../constants";
import PageWrapper from "../component/Layout/pageWrapper/PageWrapper";

const Screen = () => {
  const navigate = useNavigate();
  // const product = products.find((e) => e.id === 3);
  const redirect = () => {
    if (showSteps) {
      navigate("/products/tele_medicine/insure");
    } else {
      setShowSteps(true);
    }
  };

  return (
    <PageWrapper>
      {/* <div className="desktop">
        <Product product={product} benefitHeader={product.benefit_header}/>
        <div className={style.loadmore}>
          <button onClick={redirect}>Continue</button>
        </div>
      </div> */}
      <div className={`${style.wrap} `}>
        <h2>TELE MEDICINE</h2>
        <h4>How to get Telemedicine</h4>
        {/* <p>
          The Nunki Virtual Healthcare Membership is a subscription-based
          service that provides access to a team of healthcare professionals.
        </p> */}

        <ul className={style.benefits}>
          {telemedSteps?.benefits?.map((benefit, index) => (
            <li key={benefit?.id}>
              <>
                <span className={productstyle.check}>
                  {index+1}
                </span>
                <span className={productstyle.benefit}>
                  {benefit?.benefit}
                  <div className={productstyle.benefitImage}>
                    {benefit?.img && <img src={benefit?.img} alt="image" />}
                  </div>  
                </span>
              </>
            </li>
          ))}
        </ul>
      <div className={`${style.wrap} mobile`}>
        {!showSteps ? (
          <>
            <h2>TELE MEDICINE</h2>
            <h4>What you get for R30?</h4>
            <p>
              The Nunki Virtual Healthcare Membership is a subscription-based
              service that provides access to a team of healthcare
              professionals.
            </p>
            <ul className={style.benefits}>
              {product?.benefits?.map((benefit) => (
                <li key={benefit?.id}>
                  <span className={productstyle.check}>
                    <img src={mark} alt={benefit?.benefit} />
                  </span>
                  <span className={productstyle.benefit}>
                    {benefit?.benefit}
                  </span>
                </li>
              ))}
            </ul>
            <div className={style.continue}>
              <button onClick={redirect}>Continue</button>
            </div>
          </>
        ) : (
          <>
            <h4>How to get Telemedicine</h4>
            <p>Here are the steps to getting Telemedicine:</p>
            <ul className={style.benefits}>
              {product?.benefits?.map((benefit, index) => (
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
        )}
      </div>
      </PageWrapper>
  );
};

export default Screen;
