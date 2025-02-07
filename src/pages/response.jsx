import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import product from "./GetPrices/Getprices.module.css";

const Response = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [ReferenceNumber, setReferenceNumber] = useState("");

  useEffect(() => {
    localStorage.clear();
    fetchTelemedicine();
  }, []);

  const fetchTelemedicine = async () => {
    try {
      const telemedicineResponse = await axios.get(
        "https://nunkiapi-kkr1.onrender.com/api/v1/telemedicine"
      );
      const telemedicineData = telemedicineResponse.data;

      const userIdNumber = searchParams.get("id_number");
      const userTelemedicine = telemedicineData.filter(
        (telemedicine) => telemedicine.id_number === userIdNumber
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
            Your reference number is {ReferenceNumber}. Please click here to
            create your account and start enjoying our service.
          </p>
          <Link
            to="https://carefirst.co.za/nunki"
            target="_blank"
            className={product.link}
          >
            <h3> Create an Account </h3>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Response;
