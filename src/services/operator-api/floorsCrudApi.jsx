import axios from "axios";

// Base URl
const baseURL = import.meta.env.VITE_API_URL;

// Add floor API
export const AddFloorAPI = async (form, token) => {
  try {
    const response = await axios.post(`${baseURL}/floors/create-floor`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// Get floors API
export const GetFloorAPI = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/floors`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Delete floors API
export const DeleteFloorAPI = async (id, token) => {
  try {
    const response = await axios.delete(`${baseURL}/floors/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Edit floor API
export const EditFloorAPI = async (token, form) => {
  try {
    const response = await axios.put(`${baseURL}/floors/${form.id}`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
