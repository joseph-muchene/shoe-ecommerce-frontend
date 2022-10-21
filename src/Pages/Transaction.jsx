import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import Receipt from "../Components/Receipt";

function Transaction() {
  const { order } = useSelector((state) => state.Order);
  const { cartItems } = useSelector((state) => state.Cart.Cart);
  return (
    <div>
      <Navbar />
      {/* <Banner title="Transaction" /> */}
      <div className="container mb-3">
        <Receipt order={order} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Transaction;
