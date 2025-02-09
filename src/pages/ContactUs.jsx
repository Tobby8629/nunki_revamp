import React, { useState } from "react";
import Swal from "sweetalert2";
import template from "../component/products/template.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import useCustomMutation from "../api/Mutation";
import { handleFeedback } from "../api/apifuncs";
import { handlecallRequest } from "../api/apifuncs";

const ContactUs = () => {
  const [feedback, setFeedback] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    message: "",
  });
  const [callRequest, setCallRequest] = useState({
    first_name: "",
    phone_number: "",
  });
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleCallRequestChange = (e) => {
    setCallRequest({ ...callRequest, [e.target.name]: e.target.value });
  };

  const { mutateAsync: handleSubmitMutation } = useCustomMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handleFeedback(feedback, handleSubmitMutation);
      setFeedback({
        first_name: "",
        last_name: "",
        phone_number: "",
        message: "",
      });
      Swal.fire({
        title: "Success",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "There was an error sending your message. Please try again.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCallRequestSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handlecallRequest(callRequest, handleSubmitMutation);
      setCallRequest({ first_name: "", phone_number: "" });
      Swal.fire({
        title: "Success",
        text: "Your call request has been sent successfully!",
        icon: "success",
        confirmButtonText: "Ok",
      });
      setIsExpanded(false);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "There was an error sending your call request. Please try again.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={template.section}>
      <div
        className={template.main}
        style={{ padding: 0, justifyContent: "center" }}
      >
        <div className={template.ContactUs}>
          <div className={template.contactform}>
            <h2>GET IN TOUCH WITH US</h2>
            <form className={template.form} onSubmit={handleSubmit}>
              <div className={template.formGroup}>
                <input
                  type="text"
                  id="firstname"
                  name="first_name"
                  placeholder="First Name"
                  required
                  value={feedback.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className={template.formGroup}>
                <input
                  type="text"
                  id="lastname"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  value={feedback.last_name}
                  onChange={handleChange}
                />
              </div>

              <div className={template.formGroup}>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  maxLength={10}
                  placeholder="Phone Number"
                  required
                  value={feedback.phone_number}
                  onChange={handleChange}
                />
              </div>
              <div className={template.formGroup}>
                <textarea
                  rows={5}
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                  value={feedback.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className={template.buttonContainer}>
                <button
                  type="submit"
                  className={template.btn}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "SUBMIT"}
                </button>
              </div>
            </form>
          </div>
          <div className={template.contacct_container}>
            <div className={template.map}>
              <iframe
                title="Map"
                src="https://maps.google.com/maps?q=Block%20G%20The%20Terraces%201%20Silverwood%20Close%20Steenberg%20Office%20Park%20Tokai%20Cape%20Town%207945&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  zIndex: 2,
                }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>

            <div className={template.contact}>
              <a className={template.email} href="mailto:info@nunki.africa">
                <FontAwesomeIcon
                  className={template.subicons}
                  icon={faEnvelope}
                />
                <span>info@nunki.africa</span>
              </a>

              <a className={template.phone} href="tel:0217010874">
                <FontAwesomeIcon className={template.subicons} icon={faPhone} />
                <span>021 701 0874</span>
              </a>

              <div
                className={template.call}
                onClick={() => setIsExpanded(true)}
              >
                <FontAwesomeIcon className={template.subicons} icon={faUser} />
                <span>Request a call</span>
                {isExpanded && (
                  <div className={template.callform}>
                    <form onSubmit={handleCallRequestSubmit}>
                      <div className={template.formGroup}>
                        <input
                          type="text"
                          id="call_fname"
                          name="first_name"
                          placeholder="First Name"
                          required
                          value={callRequest.first_name}
                          onChange={handleCallRequestChange}
                        />
                      </div>
                      <div className={template.formGroup}>
                        <input
                          type="tel"
                          id="call_phonenumber"
                          name="phone_number"
                          maxLength={10}
                          placeholder="Phone Number"
                          required
                          value={callRequest.phone_number}
                          onChange={handleCallRequestChange}
                        />
                      </div>
                      <div className={template.buttonContainer}>
                        <button
                          type="submit"
                          className={template.btn}
                          disabled={loading}
                        >
                          {loading ? "Sending..." : "SUBMIT"}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
