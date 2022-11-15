import React from "react";
import { useDispatch } from "react-redux";

import { deleteOrder } from "../app/Feartures/Order/OrderSlice";
import OrderModal from "./OrderModal";

function Order({ order }) {
  const dispatch = useDispatch();

  const removeOrder = (orderId) => {
    if (window.confirm("Do you want to remove this order?")) {
      dispatch(deleteOrder(orderId));
    }
  };

  return (
    <>
      <OrderModal stat={order.status} _id={order?._id} />
      <tr>
        <td>{order.ReceiptNumber}</td>
        <td>{order?.email}</td>
        <td>{order?.phone_number}</td>
        <td>{order.products.length}</td>
        <td>{order.amount}</td>
        <td>{order.status}</td>
        <td>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-info"
              data-mdb-toggle="modal"
              data-mdb-target={"#staticBackdrop" + order._id}
            >
              Update
            </button>
            <button
              onClick={() => removeOrder(order._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Order;
