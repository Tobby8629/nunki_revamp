import { useEffect, useState } from "react";
import style from "./Tele.module.css";
import { TelemedInputs } from "../../assets/data";
import useCustomMutation from "../../api/Mutation";
import { InputSwitch } from "../../component/TeleMedicine/formQuestion/InputSwitch";
import PaymentForm from "../../component/Payment/PaymentForm";
import { currentPage, switchTab } from "../../constants/funcs";
import { handleTelemedicine } from "../../api/apifuncs";
import { FormContext } from "./createContext";
import PageWrapper from "../../component/Layout/pageWrapper/PageWrapper";

const Telemedicine = () => {
  const [tab, setTab] = useState(0);
  const [form, setform] = useState({});
  const pages = ["name", "identification", "terms"];
  const [fields, setFields] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // Local loading state

  useEffect(() => {
    const filter = currentPage(TelemedInputs, pages, tab);
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
    product_name: "Tele Medicine",
  };

  const { mutateAsync: handleSubmitMutation } = useCustomMutation();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessages([]); // Reset error messages

    try {
      await handleTelemedicine(
        form,
        values,
        accountReference,
        handleSubmitMutation,
        setShowPayment
      );
    } catch (error) {
      setErrorMessages([
        error.message || "An error occurred during submission.",
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContext.Provider value={{ tab, form, setform, fields }}>
      <PageWrapper
        style={{ padding: 0, background: "#e4f3ffd9" }}
        mainStyle={{ padding: 0 }}
      >
        <div className={style.wrapper}>
          {showPayment ? (
            <PaymentForm values={values} />
          ) : (
            <>
              {tab === pages.length - 1 ? (
                <div className={style.top}>
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

                <button
                  onClick={() => {
                    switchTab(
                      TelemedInputs,
                      tab,
                      pages,
                      form,
                      setErrorMessages,
                      setTab,
                      handleSubmit
                    );
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Activating..." : "Continue"}
                </button>
              </div>
            </>
          )}
        </div>
      </PageWrapper>
    </FormContext.Provider>
  );
};

export default Telemedicine;
