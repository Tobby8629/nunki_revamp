import React from "react";
import { products } from "../assets/data";
import Product from "../component/products/Product";
import style from "./Telemedicine/Tele.module.css";
import productstyle from "../component/products/product.module.css";
import { useNavigate } from "react-router-dom";
import { mark } from "../assets/productImage/ProductImage";

const Screen = () => {
  const navigate = useNavigate();
  const product = products.find((e) => e.id === 3);
  const redirect = () => {
    navigate("/products/tele_medicine/insure");
  };
  return (
    <div className={style.screen}>
      <div className="desktop">
        <Product product={product} />
        <div className={style.loadmore}>
          <button onClick={redirect}>Continue</button>
        </div>
      </div>
      <div className={`${style.wrap} mobile`}>
        <h2>TELE MEDICINE</h2>
        <h4>What you get for R30?</h4>
        <p>
          The Nunki Virtual Healthcare Membership is a subscription-based
          service that provides access to a team of healthcare professionals.
        </p>

        <ul className={style.benefits}>
          {product?.benefits?.map((benefit) => (
            <li key={benefit?.id}>
              <>
                <span className={productstyle.check}>
                  <img src={mark} alt={benefit?.benefit} />
                </span>
                <span className={productstyle.benefit}>{benefit?.benefit}</span>
              </>
            </li>
          ))}
        </ul>

        <div className={style.continue}>
          <button onClick={redirect}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Screen;
