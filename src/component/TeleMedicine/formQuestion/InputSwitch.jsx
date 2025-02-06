import React, { useContext } from "react";
import { FormContext } from "../../../pages/Telemedicine/Telemedicine";
import CheckInput from "./CheckInput";
import style from "../../../pages/Telemedicine/Tele.module.css";
// import OTP from "../../inputs/OTP/OTP";
import { Link } from "react-router-dom";

export const InputSwitch = ({ page }) => {
  const { fields, form, setform } = useContext(FormContext);

  switch (page) {
    case "name":
      return (
        <div className={style.nameWrapper}>
          {fields.map((e) => (
            <React.Fragment key={e.id}>
              {CheckInput(e, { width: "48%", className: "input" })}
            </React.Fragment>
          ))}
        </div>
      );
    case "identification":
      return (
        <div className={style.nameWrapper}>
          {fields.map((e) => (
            <React.Fragment key={e.id || e.name || index}>
              {e.name === "email_Address"
                ? CheckInput(e, {
                    inputStyle: style.full,
                    className: "input",
                    type: "email",
                  })
                : e.name === "id_type"
                ? CheckInput(e, {
                    width: "48%",
                    inputWrapper: style.idType,
                    className: "input",
                  })
                : CheckInput(e, {
                    width: "48%",
                    className: "input",
                    other: fields[0]?.options?.find(
                      (ex) => ex.value == form.id_type
                    )?.name,
                  })}
            </React.Fragment>
          ))}
        </div>
      );
    // case "gender":
    //   return(
    //     <div className={style.nameWrapper}>
    //       {fields.map((e) => (
    //         <React.Fragment key={e.id || e.name || index}>
    //           {e.name === "gender" ?
    //           CheckInput(e, {inputWrapper: style.half, className:"input"}) :
    //           CheckInput(e,{width: "48%", className:"input"})}
    //         </React.Fragment>
    //       ))}
    //     </div>

    //   )
    // case "otp":
    //   return(
    //     <div>
    //       <p className={style.otpText}>An OTP has been sent to your email or phone number</p>
    //        <OTP setform={setform} />
    //     </div>
    // );

    case "terms":
      return (
        <div className={style.termsWrapper}>
          <p className={style.acceptancePolicy}>
            By using the Nunki Africa Telemedicine service, you confirm that you
            are 18 years or older. Membership fees are charged monthly or
            annually at R330, with payment required in advance. You may cancel
            your membership anytime, effective at the end of the billing period,
            but no refunds are provided for unused services. Your personal and
            medical information will be handled confidentially in line with data
            protection laws. This service is not a substitute for professional
            medical advice -always consult a healthcare provider for serious
            concerns. Nunki Africa reserves the right to modify terms or
            services with reasonable notice and is not liable for indirect or
            consequential damages arising from service use. These terms are
            governed by South African law, and any disputes will be resolved in
            South African courts. For questions, contact us at{" "}
            <Link to={"/contact"}>Contact Page</Link>
          </p>
          <div className={style.signature}>
            <label className={style.checkbox}>
              <input
                type="checkbox"
                className="input"
                id="terms"
                name="terms"
                onChange={(e) => setform({ ...form, terms: e.target.checked })}
              />
              <span
                className={`${style.check} ${form.terms ? style.active : ""}`}
              ></span>
              I agree to the Nunk's T&Cs.
            </label>
            <label className={style.checkbox}>
              <input
                type="checkbox"
                className="input"
                id="recieve_material"
                name="recieve_material"
                onChange={(e) =>
                  setform({ ...form, recieve_material: e.target.checked })
                }
              />
              <span
                className={`${style.check} ${
                  form.recieve_material ? style.active : ""
                }`}
              ></span>
              I agree to recieve marketing material from Nunki.
            </label>
          </div>
        </div>
      );

    default:
      <div>
        <p>Thank you</p>
      </div>;
  }
};
