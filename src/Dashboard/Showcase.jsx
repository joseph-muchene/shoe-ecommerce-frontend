import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsList } from "../app/Feartures/Product/ProductSlice";
import Product from "./Product";
function Showcase({ createProd }) {
  const { products } = useSelector((state) => state.Product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsList());
  }, []);

  return (
    <div>
      <div className="row">
        <div className="d-flex gap-2 my-3 justify-content-center flex-column">
          <div>
            <button onClick={createProd} className="mx-4 btn btn-primary">
              Create Products
            </button>
          </div>
          <div className="container">
            <h1 className="text-center my-2 h3">Products List</h1>
            <div className="table-responsive">
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col">name</th>
                    <th scope="col">quantity</th>
                    <th scope="col">description</th>
                    <th scope="col">price</th>
                    <th scope="col">actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 &&
                    products.map((product) => {
                      return <Product product={product} key={product._id} />;
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
