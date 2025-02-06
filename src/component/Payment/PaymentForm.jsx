import React from "react";
import axios from "axios";

const PaymentForm = ({ values }) => {
  const [checkoutId, setCheckoutId] = React.useState("");
  const [error, setError] = React.useState("");
  console.log(values);

  React.useEffect(() => {
    generateCheckoutId();
  }, []);

  const generateCheckoutId = async () => {
    const url = import.meta.env.VITE_CHECKOUT_ENDPOINT;
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: import.meta.env.VITE_PAYMENT_AUTHORIZATION,
    };
    const data = {
      entityId: import.meta.env.VITE_ENTITY_ID,
      amount: values.cover_price,
      currency: "ZAR",
      paymentType: "PA",
      "standingInstruction.mode": "INITIAL",
      "standingInstruction.type": "UNSCHEDULED",
      "standingInstruction.source": "CIT",
      createRegistration: "true",
      merchantTransactionId: `INV-${values.id}`,
    };

    try {
      const response = await axios.post(
        url,
        new URLSearchParams(data).toString(),
        { headers }
      );
      const checkoutId = response.data.id;
      setCheckoutId(checkoutId);
      setError("");

      // Clear localStorage if checkoutId is generated
      // if (checkoutId) {
      //   localStorage.clear();
      // }
    } catch (error) {
      setError(
        "An error occurred while generating the checkout ID. Please refresh the page and try again."
      );
    }
  };

  React.useEffect(() => {
    if (checkoutId && !document.getElementById("paymentWidgetForm")) {
      const script = document.createElement("script");
      script.src = `${
        import.meta.env.VITE_PAYMENT_WIDGET_URL
      }?checkoutId=${checkoutId}`;
      script.async = true;
      const formContainer = document.getElementById("payment-form-container");
      formContainer.appendChild(script);
    }
  }, [checkoutId]);

  // Construct the URL with id_number parameter
  const actionUrl = new URL(
    values.accountReference !== undefined && values.accountReference !== ""
      ? import.meta.env.VITE_SUCCESS1_ENDPOINT
      : import.meta.env.VITE_SUCCESS2_ENDPOINT
  );
  actionUrl.searchParams.append("id_number", values.id);

  return (
    <div>
      {/* <h2>Please proceed with the payment to secure your policy</h2> */}
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
