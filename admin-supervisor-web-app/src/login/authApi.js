import axios from "axios";
import { LOCALHOST } from "../config";
import { useNavigate } from "react-router-dom";

const baseURL = `${LOCALHOST}/auth`;

const useAuthApi = () => {
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const response = await axios.post(`${baseURL}/login`, userData);
      const { role } = response.data;

      if (role !== "SUPERVISOR" || role !== "ADMIN") {
        navigate("/login");
        return; // Stop execution
      }

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  return { login };
};

export { useAuthApi };
