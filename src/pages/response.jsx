import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import product from "./GetPrices/Getprices.module.css";
import PropTypes from "prop-types";

const Response = ({ values }) => {
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [ReferenceNumber, setReferenceNumber] = useState("");

  useEffect(() => {
    fetchTelemedicine();
  }, []);

  const fetchTelemedicine = async () => {
    try {
      const telemedicineResponse = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/telemedicine`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const telemedicineData = telemedicineResponse.data;
      const userIdNumber = values.id_number;
      const userTelemedicine = telemedicineData.filter(
        (telemedicine) => userIdNumber === telemedicine.id_number
      );

      if (userTelemedicine.length > 0) {
        const first_name = userTelemedicine[0].first_name;
        const last_name = userTelemedicine[0].last_name;
        const ReferenceNumber = userTelemedicine[0].account_reference;
        setUserName(`${first_name} ${last_name}`);
        setReferenceNumber(ReferenceNumber);
      }
    } catch (error) {
      console.log(error);
      setError("Error fetching telemedicine data");
    }
  };

  return (
    <section className={product.cover_wrapper}>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <main className={product.main}>
        <div className={product.telemedicineSuccess}>
          <h2>Purchase Successful</h2>
          <h5>Thank you, {userName} for choosing Nunki Telemedicine!</h5>
          <p>
            Your reference number is <strong>{ReferenceNumber}</strong>.{" "}
          </p>
          <p> Please keep this reference number safe</p>
          <p>
            Click here{" "}
            <a className={product.link1} href="https://carefirst.co.za/nunki">
              www.nunki/telemedicine.co.za
            </a>{" "}
            to make yor Digital medical ID to start using telemedicine
          </p>
          <Link
            to="https://patient.care-first.co.za/onboarding?clientCode=610C553620"
            target="_blank"
            className={product.link}
          >
            <h3> Set up Medical ID </h3>
          </Link>
        </div>
      </main>
    </section>
  );
};

Response.propTypes = {
  values: PropTypes.object,
};

export default Response;
