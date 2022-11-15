import axios from "axios";
const API_URL = "https://azim-online-store-backend.onrender.com/api";
const user = JSON.parse(localStorage.getItem("user"));
const getAllUsers = async () => {
  const config = {
    headers: {
      token: `Bearer ${user.token}`,
    },
  };
  try {
    const response = await axios.get(API_URL + "/user/all", config);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

const AuthData = {
  getAllUsers,
};

export default AuthData;
