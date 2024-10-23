import axios from "axios";

// Base URl
const baseURL = import.meta.env.VITE_API_URL;

// Add patient API
export const AddPatientAPI = async (form, token) => {
  try {
    const response = await axios.post(
      `${baseURL}/patients/create-patient`,
      form,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("response: ", response);
    return response;
  } catch (error) {
    return error.response;
  }
};

// Get patients API
export const GetpatientAPI = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/patients`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Get patients by Id API
export const GetpatientsByChamberId = async (token, id) => {
  try {
    const response = await axios.get(`${baseURL}/patients/chamber/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Delete patients API
export const DeletepatientAPI = async (id, token) => {
  try {
    const response = await axios.delete(`${baseURL}/patients/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Edit patient API
export const EditpatientAPI = async (token, form) => {
  try {
    const response = await axios.put(`${baseURL}/patients/${form.id}`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
