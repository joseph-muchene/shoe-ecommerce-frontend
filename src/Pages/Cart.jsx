import React, { useState } from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createOrder } from "../app/Feartures/Order/OrderSlice";
import { v4 } from "uuid";
function Cart() {
  const { cartItems } = useSelector((state) => state.Cart.Cart);
  const navigate = useNavigate();
  const [total, setTotal] = React.useState(0);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => state.Auth);
  const { isSuccess, isError } = useSelector((state) => state.Order);
  const { order } = useSelector((state) => state.Order);
  const ProcessTransaction = () => {
    if (user === null) {
      setShow(!show);
    }
    const orderItem = {
      ReceiptNumber: v4(),
      userId: user._id,
      email: user.email,
      products: cartItems,
      address: "",
      status: "pending",
      amount: total,
    };

    dispatch(createOrder(orderItem));

    navigate("/transaction");
  };

  const getTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  };

  useEffect(() => {
    getTotal();
  });

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }
  return (
    <div>
      <Navbar />
      <Banner title="My Cart" />

      <section class="h-100 gradient-custom">
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Cart - {cartItems?.length} items</h5>
                </div>
                <div class="card-body">
                  <hr class="my-4" />
                  {cartItems.map((item) => {
                    return (
                      <CartItem
                        item={item}
                        key={item.productId}
                        quantity={item.quantity}
                      />
                    );
                  })}

                  {cartItems.length < 1 && (
                    <h3 className="text-center">
                      your cart is empty <Link to="/">Continue shopping</Link>
                    </h3>
                  )}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Summary</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    {/* <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>$53.98</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li> */}
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>Ksh {numberWithCommas(total)}</strong>
                      </span>
                    </li>
                  </ul>
                  <>
                    {cartItems.length > 0 && (
                      <div className="row">
                        <div className="col-sm">
                          <button
                            className="btn btn-primary btn-lg btn-block"
                            onClick={ProcessTransaction}
                          >
                            Process to Transaction
                          </button>
                          <Link to="/login">
                            <p className="text-center mt-3">
                              {show
                                ? "create an account to complete transaction"
                                : ""}
                            </p>
                          </Link>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
