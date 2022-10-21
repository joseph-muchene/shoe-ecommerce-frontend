import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeItem,
  increaseItem,
  decrease,
  calculateTotals,
} from "../app/Feartures/Cart/CartSlice";

import { getProduct } from "../app/Feartures/Product/ProductSlice";

function CartItem({ item, quantity }) {
  const dispatch = useDispatch();

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

  return (
    <div>
      <div class="row my-2">
        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div
            class="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img src={item.photo} class="w-100" />
            <a href="#!">
              <div
                class="mask"
                style={{
                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                }}
              ></div>
            </a>
          </div>
        </div>

        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <p>
            <strong>{item.title}</strong>
          </p>
          <button
            type="button"
            class="btn btn-primary btn-sm me-1 mb-2"
            onClick={() => dispatch(removeItem(item.productId))}
          >
            <i class="fas fa-trash"></i>
          </button>
          {/* <button
            type="button"
            class="btn btn-danger btn-sm mb-2"
            data-mdb-toggle="tooltip"
            title="Move to the wish list"
          >
            <i class="fas fa-heart"></i>
          </button> */}
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div class="d-flex mb-4" style={{ maxWidth: "300px" }}>
            {quantity !== 1 && (
              <button
                class="btn btn-primary px-3 me-2"
                onClick={() => dispatch(decrease(item.productId))}
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
              >
                <i class="fas fa-minus"></i>
              </button>
            )}

            <div class="form-outline">
              <input
                type="number"
                min="0"
                value={quantity}
                name="quantity"
                class="form-control"
              />
            </div>

            <button
              class="btn btn-primary px-3 ms-2"
              onClick={() => dispatch(increaseItem(item.productId))}
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>

          <p class="text-start text-md-center">
            <strong>Amount {numberWithCommas(quantity * item.price)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
