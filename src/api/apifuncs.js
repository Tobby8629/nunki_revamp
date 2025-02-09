import axios from "axios";
import { Alert } from "../constants";

export const handleSubscribe = async (
  email,
  data,
  mutate,
  queryClient,
  setEmail
) => {
  if (!email) {
    Alert(
      "error",
      "Empty Email",
      "Please enter your email address before subscribing.",
      "#f4f4f4"
    );
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    Alert("error", "invalid Email", "Please enter a valid email address.");
    return;
  }

  try {
    const isSubscribed = data?.some((e) => e.email === email);
    if (isSubscribed) {
      Alert(
        "error",
        "Already Subscribed",
        "You have already subscribed with this email address."
      );
      return;
    }

    mutate(
      {
        method: "post",
        endpoint: "subscribers",
        params: { email, subscription_date: new Date().toISOString() },
      },
      {
        onSuccess: (response) => {
          queryClient.invalidateQueries(["getEmails"]);
          response && setEmail("");
          Alert(
            "success",
            "Subscription Successful!",
            "Thank you for subscribing."
          );
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const dispatchNewCustomer = async (form, handleSubmitMutation) => {
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

const dispatchNewQuote = async (form, values, handleSubmitMutation) => {
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

const addAccountToCareFirst = async (telemedicine, setShowPayment) => {
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
    Alert(
      "yellow",
      "error",
      "Oops...",
      `Account could not be added to CareFirst. Please try again later`
    );
  }
};

export const handleTelemedicine = async (
  form,
  values,
  accountReference,
  handleSubmitMutation,
  setShowPayment
) => {
  //makes sure no field is empty and required field are compulsory
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
    Alert(
      "error",
      "Oops...",
      `Please fill in all the following required fields`,
      "yellow"
    );
    return;
  }

  //Get all data required to prepare API for consuption
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

  //Consume the Telemedicine API for NUNKI
  try {
    const telemedicineResponse = await handleSubmitMutation({
      method: "POST",
      endpoint: "telemedicine", // Update with your actual endpoint
      params: telemedicine,
    });

    if (telemedicineResponse) {
      await dispatchNewCustomer(form, handleSubmitMutation);
      await dispatchNewQuote(form, values, handleSubmitMutation);
      await addAccountToCareFirst(telemedicine, setShowPayment);
      setShowPayment(true);
    } else {
      throw new Error("Error processing telemedicine request");
    }
  } catch (error) {
    Alert("yellow", "error", "Oops...", `An error occurred: ${error.message}`);
  }
};

export const handleFeedback = async (feedback, handleSubmitMutation) => {
  const addFeedback = {
    first_name: feedback.first_name,
    last_name: feedback.last_name,
    phone_number: feedback.phone_number,
    message: feedback.message,
  };

  try {
    await handleSubmitMutation({
      method: "POST",
      endpoint: "feedbacks",
      params: addFeedback,
    });
  } catch (error) {
    Alert("yellow", "error", "Oops...", `An error occurred: ${error.message}`);
  }
};

export const handlecallRequest = async (callRequest, handleSubmitMutation) => {
  const call = {
    first_name: callRequest.first_name,
    phone_number: callRequest.phone_number,
  };
  try {
    await handleSubmitMutation({
      method: "POST",
      endpoint: "requestcall",
      params: call,
    });
  } catch (error) {
    Alert("yellow", "error", "Oops...", `An error occurred: ${error.message}`);
  }
};
