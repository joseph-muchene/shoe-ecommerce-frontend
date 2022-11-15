import axios from "axios";

const API_URL = "https://azim-online-store-backend.onrender.com/api";

const register = async (userData) => {
  const response = await axios.post(API_URL + "/user", userData);

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "/user/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const AuthData = {
  register,
  login,
};

export default AuthData;
