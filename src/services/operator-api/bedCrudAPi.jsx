import axios from "axios";

// Base URl
const baseURL = import.meta.env.VITE_API_URL;

// Add bed API
export const AddBedAPI = async (form, token) => {
  try {
    const response = await axios.post(`${baseURL}/beds/create-bed`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response;
  } catch (error) {
    return error.response;
  }
};

// Get beds API
export const GetBedAPI = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/beds`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Get beds by Id API
export const GetBedsByChamberId = async (token, id) => {
  try {
    const response = await axios.get(`${baseURL}/beds/chamber/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Delete beds API
export const DeleteBedAPI = async (id, token) => {
  try {
    const response = await axios.delete(`${baseURL}/beds/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Edit bed API
export const EditBedAPI = async (token, form) => {
  try {
    const response = await axios.put(`${baseURL}/beds/${form.id}`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
