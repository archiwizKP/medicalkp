import axios from "axios";

// Base URl
const baseURL = import.meta.env.VITE_API_URL;

// sign in Api
export const AddRecordsAPI = async (form) => {
  try {
    const response = await axios.post(`${baseURL}/auth/add-patient`, form);
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
