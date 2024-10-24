import axios from "axios";

// Base URl
const baseURL = import.meta.env.VITE_API_URL;

// Add Tower API
export const AddTowerAPI = async (form, token) => {
  try {
    const response = await axios.post(`${baseURL}/towers/create-tower`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// Get Towers API
export const GetTowerAPI = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/towers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Delete Towers API
export const DeleteTowerAPI = async (id, token) => {
  try {
    const response = await axios.delete(`${baseURL}/towers/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Edit Tower API
export const EditTowerAPI = async (token, form) => {
  try {
    const response = await axios.put(`${baseURL}/towers/${form.id}`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// add record in Api
export const AddRecordsAPI = async (form) => {
  try {
    const response = await axios.post(`${baseURL}/auth/add-patient`, form);
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
