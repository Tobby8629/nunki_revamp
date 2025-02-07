import { useEffect, useState } from "react";
import style from "./Tele.module.css";
import { TelemedInputs } from "../../assets/data";
import useCustomMutation from "../../api/Mutation";
import { InputSwitch } from "../../component/TeleMedicine/formQuestion/InputSwitch";
import PaymentForm from "../../component/Payment/PaymentForm";
import { currentPage, switchTab } from "../../constants/funcs";
import { handleTelemedicine } from "../../api/apifuncs";
import { FormContext } from "./createContext";

const Telemedicine = () => {
  const [tab, setTab] = useState(0);
  const [form, setform] = useState({});
  const pages = ["name", "identification", "terms"];
  const [fields, setFields] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

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
  };

  const { mutateAsync: handleSubmitMutation, isLoading: isSubmitting } =
    useCustomMutation();

  return (
    <FormContext.Provider value={{ tab, form, setform, fields }}>
      <section className={`${style.wrapper} msin_section`}>
        <div>
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
                  <button
                    onClick={() =>
                      switchTab(
                        TelemedInputs,
                        tab,
                        pages,
                        form,
                        setErrorMessages,
                        setTab,
                        () =>
                          handleTelemedicine(
                            form,
                            values,
                            accountReference,
                            handleSubmitMutation,
                            setShowPayment
                          )
                      )
                    }
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Activating..." : "Continue"}
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      switchTab(
                        TelemedInputs,
                        tab,
                        pages,
                        form,
                        setErrorMessages,
                        setTab,
                        () =>
                          handleTelemedicine(
                            form,
                            values,
                            accountReference,
                            handleSubmitMutation,
                            setShowPayment
                          )
                      )
                    }
                  >
                    Continue
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </FormContext.Provider>
  );
};

export default Telemedicine;
