import React, { useState } from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../app/Feartures/Product/ProductSlice";
import Paginated from "../Paginated";
function Products() {
  const dispatch = useDispatch();
  const { products, countDoc } = useSelector((state) => state.Product);

  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(4);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const query = {
      size: 4,
      page: page,
    };
    dispatch(getProducts(query));
  }, [page]);

  return (
    <>
      <Navbar />
      <Banner />

      <h1 className="text-center my-3">Our Products</h1>
      <hr />
      <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 mt-4 mx-4">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
      </div>

      <div className="d-flex justify-content-center my-4">
        <Paginated
          handleChange={handleChange}
          page={page}
          count={Math.floor(countDoc / 4)}
        />
      </div>
    </>
  );
}

export default Products;
