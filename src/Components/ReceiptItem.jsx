import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../app/Feartures/Order/OrderSlice";
import { getProduct } from "../app/Feartures/Product/ProductSlice";
function ReceiptItem({ item }) {
 
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>{item.price * item.quantity}</td>
      <td className="text-danger">pending</td>
    </tr>
  );
}

export default ReceiptItem;
