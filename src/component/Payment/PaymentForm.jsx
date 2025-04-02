import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentForm = ({ values }) => {
  const [checkoutId, setCheckoutId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    authenticateAndGenerateCheckoutId();
  }, []);

  const authenticate = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_PAYMENT_AUTHORIZATION, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientId: import.meta.env.VITE_CLIENT_ID,
          clientSecret: import.meta.env.VITE_CLIENT_SECRET,
          merchantId: import.meta.env.VITE_MERCHANT_ID,
        }),
      });
      if (!response.ok) throw new Error("Unable to authenticate");
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      setError("Authentication failed. Please try again.");
      return null;
    }
  };

  const createCheckoutId = async (token) => {
    try {
      const response = await fetch(import.meta.env.VITE_CHECKOUT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Origin: import.meta.env.VITE_DOMAIN,
        },
        body: JSON.stringify({
          entityId: import.meta.env.VITE_ENTITY_ID,
          amount: values.cover_price,
          currency: "ZAR",
          paymentType: "PA",
          "standingInstruction.mode": "INITIAL",
          "standingInstruction.type": "UNSCHEDULED",
          "standingInstruction.source": "CIT",
          createRegistration: "true",
          integrity: "true",
          merchantTransactionId: `INV-${values.id}`,
        }),
      });
      if (!response.ok) throw new Error("Unable to retrieve Checkout ID");
      const data = await response.json();
      setCheckoutId(data.id);
    } catch (error) {
      setError("Failed to generate checkout ID. Please try again.");
    }
  };

  const authenticateAndGenerateCheckoutId = async () => {
    const token = await authenticate();
    if (token) await createCheckoutId(token);
  };

  useEffect(() => {
    if (checkoutId && !document.getElementById("paymentWidgetForm")) {
      const script = document.createElement("script");
      script.src = `${
        import.meta.env.VITE_PAYMENT_WIDGET_URL
      }?checkoutId=${checkoutId}`;
      script.async = true;
      script.integrity = "{ integrity }";
      script.crossOrigin = "anonymous";
      document.getElementById("payment-form-container").appendChild(script);
    }
  }, [checkoutId]);

  const actionUrl = new URL(
    values.accountReference
      ? import.meta.env.VITE_SUCCESS1_ENDPOINT
      : import.meta.env.VITE_SUCCESS2_ENDPOINT
  );
  actionUrl.searchParams.append("id_number", values.id);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div id="payment-form-container">
        <form
          action={actionUrl.toString()}
          method="POST"
          className="paymentWidgets"
          data-brands="VISA MASTER AMEX"
        ></form>
      </div>
    </div>
  );
};

export default PaymentForm;
