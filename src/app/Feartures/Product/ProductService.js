import axios from "axios";

const API_URL = "https://azim-online-store-backend.onrender.com/api";
const getProducts = async ({ size, page }) => {
  try {
    const response = await axios.get(
      API_URL + `/product?size=${size}&page=${page}`
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL + `/product/all`);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
const getAllProductsList = async () => {
  try {
    const response = await axios.get(API_URL + `/product/all/list`);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const relatedProducts = async (productId) => {
  try {
    const response = await axios.get(API_URL + `/product/related/${productId}`);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const user = JSON.parse(localStorage.getItem("user"));
const createProduct = async (productData) => {
  const config = {
    headers: {
      token: `Bearer ${user.token}`,
    },
  };
  try {
    console.log(productData);
    const response = await axios.post(
      API_URL + "/product",
      productData,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
const getProduct = async (productId) => {
  try {
    const response = await axios.get(API_URL + `/product/${productId}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

const deleteProduct = async (productId) => {
  const config = {
    headers: {
      token: `Bearer ${user.token}`,
    },
  };
  try {
    const response = await axios.delete(
      API_URL + `/product/${productId}`,
      config
    );

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

const updateProduct = async (d) => {
  const { productData, _id } = d;
  const config = {
    headers: {
      token: `Bearer ${user.token}`,
    },
  };
  try {
    const response = await axios.put(
      API_URL + `/product/${_id}`,
      productData,
      config
    );

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

const productData = {
  getProducts,
  createProduct,
  getAllProducts,
  getProduct,
  getAllProductsList,
  updateProduct,
  deleteProduct,
  relatedProducts,
};

export default productData;
