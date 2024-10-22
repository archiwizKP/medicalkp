import axios from "axios";

// Base URl
const baseURL = import.meta.env.VITE_API_URL;

// Add chamber API
export const AddChamberAPI = async (form, token) => {
  try {
    const response = await axios.post(
      `${baseURL}/chambers/create-chamber`,
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

// Get chambers API
export const GetChamberAPI = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/chambers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Get chambers by Id API
export const GetChambersByLevelId = async (token, id) => {
  try {
    const response = await axios.get(`${baseURL}/chambers/level/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Delete chambers API
export const DeleteChamberAPI = async (id, token) => {
  try {
    const response = await axios.delete(`${baseURL}/chambers/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Edit chamber API
export const EditChamberAPI = async (token, form) => {
  try {
    const response = await axios.put(`${baseURL}/chambers/${form.id}`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
