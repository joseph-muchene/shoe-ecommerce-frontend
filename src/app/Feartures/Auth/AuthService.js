import axios from "axios";

const register = async (userData) => {
  const response = await axios.post("/user", userData);

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post("/user/login", userData);

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
