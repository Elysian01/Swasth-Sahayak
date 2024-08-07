import axios from "axios";
import { LOCALHOST } from "../../config";
// Common headers or configurations can be set here
axios.defaults.baseURL = `${LOCALHOST}`; // Base URL for your API

// Function to make a GET request
export const getRequest = async (endpoint, headers) => {
  try {
    const response = await axios.get(endpoint, { headers });
    return response.data;
  } catch (error) {
    throw error; // Propagate the error to handle it in the component
  }
};

// Function to make a POST request
export const postRequest = async (endpoint, data, headers) => {
  try {
    const response = await axios.post(endpoint, data, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more functions for other types of requests if needed
