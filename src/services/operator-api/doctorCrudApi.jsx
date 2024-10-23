import axios from "axios";

// Base URl
const baseURL = import.meta.env.VITE_API_URL;

// Add doctor API
export const AddDoctorAPI = async (form, token) => {
  try {
    const response = await axios.post(
      `${baseURL}/doctors/create-doctor`,
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

// Get doctors API
export const GetDoctorAPI = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/doctors`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Get doctors by Id API
export const GetRolesDoctors = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/doctors?sorted=1`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Delete doctors API
export const DeleteDoctorAPI = async (id, token) => {
  try {
    const response = await axios.delete(`${baseURL}/doctors/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Edit doctor API
export const EditDoctorAPI = async (token, form) => {
  try {
    const response = await axios.put(`${baseURL}/doctors/${form.id}`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
