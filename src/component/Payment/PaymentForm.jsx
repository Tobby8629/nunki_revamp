import { useEffect, useState } from "react";
import style from "./Payment.module.css";
import Response from "../../pages/response";
import Result from "../../pages/result";
import { botLogo } from "../../../public/images/Nunki/nunkiImages";
import Swal from "sweetalert2";

const CHECKOUT_JS = import.meta.env.VITE_CHECKOUT_JS;

const PaymentForm = ({ values }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [isPaymentStarted, setIsPaymentStarted] = useState(false); // NEW

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
    setIsPaymentStarted(true);
    setMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/checkout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: values.cover_price,
            merchant_transaction_id: `INVOICE-${values.id_number}-${values.product_name}`,
          }),
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
          onCompleted: async (event) => {
            console.log(event);
            checkout.unmount();

            const telemedicine = {
              account_reference: values.account_reference,
              id_number: values.id_number,
              last_name: values.lastName,
            };

            try {
              const response = await fetch(
                `${
                  import.meta.env.VITE_BACKEND_URL
                }/api/v1/carefirst/add_account`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(telemedicine),
                }
              );

              const result = await response.json();

              if (response.ok) {
                Swal.fire({
                  icon: "success",
                  title: "Account Created",
                  text:
                    result.message ||
                    "Account successfully created in CareFirst.",
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Account Creation Failed",
                  text:
                    result.error ||
                    "Something went wrong while creating the account.",
                });
              }
            } catch (err) {
              console.error(err);
              Swal.fire({
                icon: "error",
                title: "Network Error",
                text: "Unable to connect to the server. Please try again.",
              });
            }

            setIsPaid(true);
          },
          onCancelled: (event) => {
            console.log(event);
            checkout.unmount();
            setIsPaymentStarted(false);
            setMessage("❌ Payment Cancelled.");
          },
          onExpired: (event) => {
            console.log(event);
            checkout.unmount();
            setIsPaymentStarted(false);
            setMessage("⌛ Payment Expired. Please try again.");
          },
        },
      });

      checkout.render("#payment-form");
    } catch (error) {
      console.error("Error fetching checkout ID:", error.message);
      setMessage("❌ Failed to initiate checkout. Please try again.");
      setIsPaymentStarted(false); // In case of failure
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
    <>
      <h2 className={style.header}>Payment Form</h2>
      <p className={style.headerText}>payment for {values.product_name}</p>
      <div>
        {!isPaymentStarted && (
          <>
            <div className={style.paymentImg}>
              <img
                src={botLogo}
                alt={"rotate"}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div id="complete-checkout" className={style.paymentButton}>
              <button
                onClick={getCheckoutId}
                disabled={!isScriptLoaded || isLoading}
              >
                {isLoading ? "Processing..." : "Pay Now"}
              </button>
            </div>
          </>
        )}

        <div className={style.paymentForm} id="payment-form"></div>

        {message && (
          <p style={{ color: "red", textAlign: "center" }}>{message}</p>
        )}
      </div>
    </>
  );
};

export default PaymentForm;
