import axios from "axios";


const API_URL = "https://azim-online-store-backend.onrender.com/api";
const getAllOrders = async () => {
  const config = {
    headers: {
      token: `Bearer ${user.token}`,
    },
  };
  try {
    const response = await axios.get(API_URL+`/order`, config);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const userOrders = async () => {
  const userId = JSON.parse(localStorage.getItem("user")._id);
  try {
    const response = await axios.get(API_URL + `/user/${userId}`);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getOrder = async (orderId) => {
  try {
    const config = {
      headers: {
        token: `Bearer ${user.token}`,
      },
    };
    const response = await axios.get(API_URL + `/order/${orderId}`, config);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const user = JSON.parse(localStorage.getItem("user"));
const createOrder = async (productData) => {
  const config = {
    headers: {
      token: `Bearer ${user.token}`,
    },
  };
  try {
    const response = await axios.post(
      API_URL + "/order/create",
      productData,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
const updateOrder = async (payload) => {
  const { orderData, orderId } = payload;
  console.log(orderData);
  const config = {
    headers: {
      token: `Bearer ${user.token}`,
    },
  };
  try {
    const response = await axios.put(
      API_URL + `/order/update/${orderId}`,
      orderData,
      config
    );

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

const deleteOrder = async (orderId) => {
  const config = {
    headers: {
      token: `Bearer ${user.token}`,
    },
  };
  try {
    const response = await axios.delete(
      API_URL + `/order/delete/${orderId}`,
      config
    );

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
const productData = {
  createOrder,
  deleteOrder,
  updateOrder,
  getAllOrders,
  getOrder,
  userOrders,
};

export default productData;
