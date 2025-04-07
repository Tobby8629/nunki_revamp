import React, { useEffect, useState } from "react";
import Response from "../../pages/response";
import Result from "../../pages/result";

const CHECKOUT_JS = import.meta.env.VITE_CHECKOUT_JS;

const PaymentForm = ({ values }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    setMessage("");

    if (document.querySelector(`script[src="${CHECKOUT_JS}"]`)) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = CHECKOUT_JS;
    script.async = true;

    script.onload = () => {
      setIsScriptLoaded(true);
      setMessage("");
    };

    script.onerror = () =>
      setMessage(
        "⚠️ Failed to load the payment script. Please refresh and try again."
      );

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const getCheckoutId = async () => {
    if (!isScriptLoaded) {
      setMessage("⚠️ Payment script is still loading...");
      return;
    }

    setIsLoading(true);
    setMessage("");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/checkout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const json = await response.json();

      if (!window.Checkout || typeof window.Checkout.initiate !== "function") {
        throw new Error("Peach Payments Checkout SDK failed to load.");
      }

      const checkout = window.Checkout.initiate({
        checkoutId: json.checkoutId,
        key: json.entityId,
        options: {
          theme: {
            brand: { primary: "#EC5228", secondary: "#111927" },
            cards: { background: "#ffffff", backgroundHover: "#F3F3F4" },
          },
          ordering: { CARD: 1, EFTSECURE: 4, MASTERPASS: 2, CAPITECPAY: 3 },
          enableCancelButton: true,
          enableAmountField: true,
          enableCardBrandDisplay: true,
        },
        events: {
          onCompleted: (event) => {
            console.log(event);
            checkout.unmount();
            setIsPaid(true);
          },
          onCancelled: (event) => {
            console.log(event);
            checkout.unmount();
            setMessage("❌ Payment Cancelled.");
          },
          onExpired: (event) => {
            console.log(event);
            checkout.unmount();
            setMessage("⌛ Payment Expired. Please try again.");
          },
        },
      });

      checkout.render("#payment-form");
    } catch (error) {
      console.error("Error fetching checkout ID:", error.message);
      setMessage("❌ Failed to initiate checkout. Please try again.");
    }

    setIsLoading(false);
  };

  if (isPaid) {
    return values.product_name === "Tele Medicine" ? (
      <Response values={values} />
    ) : (
      <Result values={values} />
    );
  }

  return (
    <div>
      <div id="complete-checkout">
        <button onClick={getCheckoutId} disabled={!isScriptLoaded || isLoading}>
          {isLoading ? "Processing..." : "Pay Now"}
        </button>
      </div>
      <div style={{ height: "50vh" }} id="payment-form"></div>
      {message && (
        <p style={{ color: "red", textAlign: "center" }}>{message}</p>
      )}
    </div>
  );
};

export default PaymentForm;
