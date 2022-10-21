import React, { useEffect } from "react";
import Order from "./Order";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../app/Feartures/Order/OrderSlice";
function OrdersInfo() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.Order);

  //   get all orders
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-2 h3">Orders List</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Receipt Number</th>
            <th scope="col">user email</th>
            <th scope="col">Number of items</th>
            <th scope="col">Total amount</th>
            <th scope="col">status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return <Order order={order} key={order._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersInfo;
