import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { products } from "../assets/data";
import product from "./GetPrices/Getprices.module.css";
import style from "../component/Home/InnovatingPrice'/Innovatingprice.module.css";

const Result = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [activeCoverProducts, setActiveCoverProducts] = useState([]);
  const [addProducts, setAddProducts] = useState(products);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.clear();
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(
        "https://nunkiapi-kkr1.onrender.com/api/v1/qoutes"
      );
      const quotes = response.data;

      const userIdNumber = searchParams.get("id_number");
      const userQuotes = quotes.filter(
        (quote) => quote.id_number === userIdNumber
      );

      if (userQuotes.length > 0) {
        const activeProducts = products
          .filter((product) =>
            userQuotes.some((quote) => quote.product_name === product.name)
          )
          .map((product) => {
            const quote = userQuotes.find(
              (q) => q.product_name === product.name
            );
            return { ...product, quote_amount: quote.quote_amount };
          });
        setActiveCoverProducts(activeProducts);

        setAddProducts(
          products.filter(
            (product) =>
              !userQuotes.some((quote) => quote.product_name === product.name)
          )
        );
      } else {
        setActiveCoverProducts([]);
        setAddProducts(products);
      }
    } catch (error) {
      console.log(error);
      setError("Error fetching quotes");
    }
  };

  return (
    <section className={product.cover_wrapper}>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <h2
        style={{
          color: "#1271B8",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Active Cover
      </h2>
      <main className={product.main}>
        {activeCoverProducts.map((price) => (
          <div key={price?.name} className={product.activeCoverProducts}>
            <img src={price.lightImage} alt={price.name} />
            <div className={product.activeCoverProducts_details}>
              <h4>{price.name}</h4>
              <h3 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                Cover Amount: R{price.quote_amount}
              </h3>
              <div className={product.active_buttons}>
                <button>View Policy</button>
                <button>Top Up Cover</button>
              </div>
            </div>
          </div>
        ))}
      </main>
      <h2
        style={{
          color: "#1271B8",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        ADD Products
      </h2>
      <main className={product.main}>
        {addProducts.map((price) => (
          <div key={price?.name} className={product.activeCoverProducts}>
            <img
              src={price.lightImage}
              alt={price.name}
              style={{ width: "100px", height: "100px" }}
            />
            <div className={product.activeCoverProducts_details}>
              <h4>{price.name}</h4>
              <h3 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                from R{price.price} P/M
              </h3>
              <button>
                <Link to={price.route} className={style.getqoute}>
                  BUY NOW
                </Link>
              </button>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Result;
