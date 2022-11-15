import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productData from "./ProductService";
const initialState = {
  product: {},
  products: [],
  countDoc: 0,
  related: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getProducts = createAsyncThunk(
  "products/searched",
  async (query, thunkAPI) => {
    try {
      return await productData.getProducts(query);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "products/all",
  async (_, thunkAPI) => {
    try {
      return await productData.getAllProducts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getAllProductsList = createAsyncThunk(
  "products/list",
  async (_, thunkAPI) => {
    try {
      return await productData.getAllProductsList();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);



export const createProduct = createAsyncThunk(
  "products/create",
  async (product, thunkAPI) => {
    try {
      return await productData.createProduct(product);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProduct = createAsyncThunk(
  "products/getOne",
  async (productId, thunkAPI) => {
    try {
      return await productData.getProduct(productId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const relatedProducts = createAsyncThunk(
  "products/related",
  async (productId, thunkAPI) => {
    try {
      return await productData.relatedProducts(productId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/remove",
  async (productId, thunkAPI) => {
    try {
      return await productData.deleteProduct(productId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/update",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      return await productData.updateProduct(payload);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.products = [];
      state.product = {};
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.isLoading = false;
        state.isError = false;
        state.countDoc = action.payload.data.length;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(getProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.isError = false;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(createProduct.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
      })
      .addCase(relatedProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(relatedProducts.fulfilled, (state, action) => {
        state.related = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(relatedProducts.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
      })
      .addCase(updateProduct.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.product = action.payload;
        state.products = state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
      })
      .addCase(getAllProductsList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllProductsList.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getAllProductsList.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isLoading = false;
      });

  },
});

export const { reset } = ProductSlice.actions;
export default ProductSlice.reducer;
