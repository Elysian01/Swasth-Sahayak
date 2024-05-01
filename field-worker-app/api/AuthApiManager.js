import axios from "axios";
import { BASE_URL } from "../config";

const AuthApiManager = axios.create({
	baseURL: BASE_URL,
	responseType: "json",
	withCredentials: true, // Setting credentials to true
});

export default AuthApiManager;
