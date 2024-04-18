import axios from "axios";

// Common headers or configurations can be set here
axios.defaults.baseURL = "http://localhost:9191"; // Base URL for your API

// Function to make a GET request
export const getRequest = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error; // Propagate the error to handle it in the component
  }
};

// Function to make a POST request
export const postRequest = async (endpoint, data ) => {
  try {
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// Function to make a PUT request
export const putRequest = async (endpoint, data) => {
  try {
    const response = await axios.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Add more functions for other types of requests if needed
