import axios from "axios";
import { LOCALHOST } from "../config";
const baseURL = `${LOCALHOST}/auth`;

const authApi = {
  login: async (userData) => {
    try {
      const response = await axios.post(`${baseURL}/login`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export { authApi };
