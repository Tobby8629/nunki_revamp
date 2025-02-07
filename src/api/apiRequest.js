import axios from "axios";

const api = axios.create({
  baseURL: "https://nunkiapi-kkr1.onrender.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

const apiRequest = async (method, endpoint, data = null, params = null) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data,
      params,
    });
    return response?.data ?? response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default apiRequest;
