import axios from "axios";

const getProducts = async ({ size, page }) => {
  try {
    const response = await axios.get(`/product?size=${size}&page=${page}`);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getAllProducts = async () => {
  try {
    const response = await axios.get(`/product/all`);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const relatedProducts = async (productId) => {
  try {
    const response = await axios.get(`/product/related/${productId}`);

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
    const response = await axios.post("/product", productData, config);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
const getProduct = async (productId) => {
  try {
    const response = await axios.get(`/product/${productId}`);

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
    const response = await axios.delete(`/product/${productId}`, config);

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
    const response = await axios.put(`/product/${_id}`, productData, config);

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
  updateProduct,
  deleteProduct,
  relatedProducts,
};

export default productData;
