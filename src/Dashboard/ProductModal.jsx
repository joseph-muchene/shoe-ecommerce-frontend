import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  updateProduct,
} from "../app/Feartures/Product/ProductSlice";

function ProductModal({ _id, nme, qty, desc, unit, bran }) {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProduct(productId));
  // }, []);
  // const { product } = useSelector((state) => state.Product);
  // console.log(product);
  const [formData, setFormData] = useState({
    name: nme,
    quantity: qty,
    description: desc,
    price: unit,
    brand: bran,
  });

  const { name, quantity, description, price, brand } = formData;

  const handleOnChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    const productData = {
      title: name,
      quantity,
      desc: description,
      price,
      brand,
    };

    const payload = {
      productData,
      _id,
    };
    e.preventDefault();
    dispatch(updateProduct(payload));
  };
  return (
    <div
      class="modal fade"
      id={"staticBackdrop" + _id}
      data-mdb-backdrop="static"
      data-mdb-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Update Product
            </h5>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form className="container" onSubmit={onSubmit}>
              <div>
                <div className="mt-3">
                  <label htmlFor="title">Title</label>
                  <input
                    name="name"
                    value={name}
                    onChange={handleOnChange}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="desc">desc</label>
                  <textarea
                    name="description"
                    value={description}
                    onChange={handleOnChange}
                    cols="30"
                    rows="5"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="mt-3">
                  <label htmlFor="title">price</label>
                  <input
                    name="price"
                    value={price}
                    onChange={handleOnChange}
                    type="text"
                    className="form-control"
                  />
                </div>
                {/* <div className="mt-3">
                  <label htmlFor="category">choose category:</label>
                  <br />
                  <select name="category" id="category">
                    <option value="#"></option>
                    <option value="">Gin</option>
                    <option value="">Gin</option>
                    <option value="">Gin</option>
                    <option value="">Spirit</option>
                  </select>
                </div> */}
                <div className="mt-3">
                  <label htmlFor="brand">brand</label>
                  <input
                    name="brand"
                    value={brand}
                    onChange={handleOnChange}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="brand">quantity</label>
                  <input
                    name="quantity"
                    value={quantity}
                    onChange={handleOnChange}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div>
                  <div className="mt-3">
                    <button className="btn btn-block btn-secondary mb-4">
                      Update Product
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
