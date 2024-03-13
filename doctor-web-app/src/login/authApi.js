import axios from "axios";

const baseURL = "http://localhost:9191/auth";

const authApi = {
  login: async (userData) => {
    try {
      const response = await axios.post(`${baseURL}/login`, userData);
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export { authApi };
