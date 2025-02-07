import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import style from "./Tele.module.css";
import { TelemedInputs } from "../../assets/data";
import UseQuery from "../../api/query";
import useCustomMutation from "../../api/Mutation";
import Swal from "sweetalert2";
import { InputSwitch } from "../../component/TeleMedicine/formQuestion/InputSwitch";
export const FormContext = createContext();
import PaymentForm from "../../component/Payment/PaymentForm";

const Telemedicine = () => {
  const [tab, setTab] = useState(0);
  const [form, setform] = useState({});
  const pages = ["name", "identification", "terms"];
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  console.log(form);

  useEffect(() => {
    const filter = TelemedInputs.filter((e) => e.page === pages[tab]);
    if (filter.length > 0) {
      setFields(filter);
    }
  }, [tab]);

  const generateAccountReference = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const accountReference = generateAccountReference();

  const values = {
    cover_price: 30,
    id: form.id_number,
    accountReference: accountReference,
  };

  const hasEmptyFields = () => {
    const currentFields = TelemedInputs.filter((e) => e.page === pages[tab]);
    const emptyFields = currentFields.filter(
      (field) => !form[field.name] || form[field.name].trim() === ""
    );
    setErrorMessages(
      emptyFields.map((field) => `${field.placeholder} is required.`)
    );
    return emptyFields.length > 0;
  };

  const switchTab = () => {
    setErrorMessages([]);
    if (hasEmptyFields()) {
      return;
    }

    if (tab < pages.length - 1) {
      setTab((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };

  const handleError = (message) => {
    Swal.fire({
      background: "yellow",
      icon: "error",
      title: "Oops...",
      html: message,
    });
  };

  const { mutateAsync: handleSubmitMutation, isLoading: isSubmitting } =
    useCustomMutation();

  const handleSubmit = async () => {
    const requirefields = [
      "firstName",
      "lastName",
      "phoneNumber",
      "id_number",
      "id_type",
      "email_Address",
      "terms",
      "recieve_material",
    ];
    const isEmpty = requirefields.some((field) => !form[field]);
    if (isEmpty) {
      Swal.fire({
        background: "yellow",
        icon: "error",
        title: "Oops...",
        html: `Please fill in all the following required fields`,
      });
      return;
    }

    const telemedicine = {
      first_name: form.firstName,
      last_name: form.lastName,
      phone_number: form.phoneNumber,
      id_number: form.id_number,
      id_type: form.id_type,
      email: form.email_Address,
      recieve_material: form.recieve_material === true ? "Agree" : "Disagree",
      account_reference: accountReference,
      signature: form.terms === true ? "accepted" : "declined",
      product_name: "Tele Medicine",
    };

    setLoading(true);

    try {
      // Use Mutation to submit telemedicine request
      const telemedicineResponse = await handleSubmitMutation({
        method: "POST",
        endpoint: "telemedicine",
        params: telemedicine,
      });

      if (telemedicineResponse) {
        await dispatchNewCustomer();
        await dispatchNewQuote();
        await addAccountToCareFirst(telemedicine);
        // setShowPayment(true);
      } else {
        handleError("Error processing telemedicine request. Please try again.");
      }
    } catch (error) {
      handleError(
        `An error occurred: ${error.response?.data?.message || error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  const dispatchNewCustomer = async () => {
    const customer = {
      id_number: form.id_number,
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email_Address,
      phone_number: form.phoneNumber,
      contact_method: "email",
      signature: form.terms === true ? "signed" : "unsigned",
    };

    await handleSubmitMutation({
      method: "POST",
      endpoint: "customers", // Update with the actual endpoint
      params: customer,
    });
  };

  const dispatchNewQuote = async () => {
    const quote = {
      product_name: "Tele Medicine",
      id_number: form.id_number,
      quote_date: new Date().toISOString(),
      quote_amount: values.cover_price,
      quote_status: "pending",
    };

    await handleSubmitMutation({
      method: "POST",
      endpoint: "qoutes", // Update with the actual endpoint
      params: quote,
    });
  };

  const addAccountToCareFirst = async (telemedicine) => {
    try {
      const response = await axios.post(
        "https://qa-patient.care-first.co.za/api/external/cfp-patient/client-account-management/add-account",
        {
          clientCode: "610C553620",
          totalAccounts: 1,
          responseWebhookURL: "https://nunki.vercel.app/response",
          action: "add",
          accounts: [
            {
              accountReference: telemedicine.account_reference,
              accountHolderIdNumber: telemedicine.id_number,
              accountHolderSurname: telemedicine.last_name,
              planCode: "B75A6",
            },
          ],
        },
        {
          headers: {
            "x-api-key": "9bu1ytOP6uz6eSEfhIYx",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setShowPayment(true);
      } else {
        throw new Error("Error adding account to CareFirst");
      }
    } catch (error) {
      console.error("Error adding account to CareFirst:", error);
      Swal.fire({
        background: "yellow",
        icon: "error",
        title: "Oops...",
        html: `Account could not be added to CareFirst. Please try again later`,
      });
    }
  };

  return (
    <FormContext.Provider value={{ tab, form, setform, fields }}>
      <section className={style.wrapper}>
        {showPayment ? (
          <PaymentForm values={values} />
        ) : (
          <>
            {tab === pages.length - 1 ? (
              <div className={style.top_tc}>
                <h2>T&Cs</h2>
              </div>
            ) : (
              <div className={style.top}>
                <h2>Purchase Telemedicine</h2>
              </div>
            )}

            <div className={style.down}>
              <div>
                <InputSwitch page={pages[tab]} />
              </div>
              {errorMessages.length > 0 && (
                <div className={style.errorMessages}>
                  {errorMessages.map((msg, index) => (
                    <div key={index} className={style.errorMessage}>
                      {msg}
                    </div>
                  ))}
                </div>
              )}

              {tab === pages.length - 1 ? (
                <button onClick={switchTab} disabled={loading || isSubmitting}>
                  {loading || isSubmitting ? "Activating..." : "Continue"}
                </button>
              ) : (
                <button onClick={switchTab}>Continue</button>
              )}
            </div>
          </>
        )}
      </section>
    </FormContext.Provider>
  );
};

export default Telemedicine;
