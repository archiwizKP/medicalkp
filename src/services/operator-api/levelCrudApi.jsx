import axios from "axios";

// Base URl
const baseURL = import.meta.env.VITE_API_URL;

// Add level API
export const AddLevelAPI = async (form, token) => {
  try {
    const response = await axios.post(`${baseURL}/levels/create-level`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response;
  } catch (error) {
    return error.response;
  }
};

// Get levels API
export const GetLevelAPI = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/levels`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Delete levels API
export const DeleteLevelAPI = async (id, token) => {
  try {
    const response = await axios.delete(`${baseURL}/levels/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Edit level API
export const EditLevelAPI = async (token, form) => {
  try {
    const response = await axios.put(`${baseURL}/levels/${form.id}`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response;
  } catch (error) {
    return error;
  }
};
