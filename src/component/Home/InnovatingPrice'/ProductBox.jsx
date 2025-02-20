import style from "./Innovatingprice.module.css";
import { Link } from "react-router-dom";
import { angle } from "/public/images/Nunki/nunkiImages";

const ProductBox = ({
  price,
  link,
  styles,
  tab,
  min_desk,
  desktop,
  color,
  dark,
}) => {
  const mystyle = {
    "--tab": tab,
    "--min-desk": min_desk,
    "--desktop": desktop,
    "--text-color": color,
  };

  const check = price.name.includes("Shack") || price.name.includes("Merchant");

  return (
    <div className={style.card} style={mystyle}>
      <Link
        className={style.link_cards}
        to={check ? "#" : link}
        onClick={check ? (e) => e.preventDefault() : () => price?.value}
        style={check ? { pointerEvents: "none", opacity: 0.5 } : {}}
      >
        <h3>
          <span>{price?.name}</span>
        </h3>

        <span className={style.angle}>
          <img src={angle} alt="angle" />
        </span>
      </Link>

      <div className={style.cardText} style={styles}>
        <div className={style.text}>
          <p className={style.from}>from</p>
          <p className={style.bold}>
            R{price?.price.toFixed(2).toLocaleString()}
            <span className={style.small}> PM</span>
          </p>
        </div>
        <div className={style.image}>
          {dark ? (
            <img src={price?.darkImage} alt={price?.name} />
          ) : (
            <img src={price?.lightImage} alt={price?.name} />
          )}
        </div>
        <div className={style.button}>
          <button
            disabled={check}
            style={check ? { opacity: 0.5, cursor: "not-allowed" } : {}}
          >
            <Link
              to={check ? "#" : link}
              onClick={check ? (e) => e.preventDefault() : () => price?.value}
              target={check ? "_blank" : null}
              rel={check ? "noopener noreferrer" : null}
              className={style.getqoute}
              style={check ? { pointerEvents: "none", opacity: 0.5 } : {}}
            >
              BUY NOW
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
