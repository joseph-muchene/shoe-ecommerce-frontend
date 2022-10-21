import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteProduct } from "../app/Feartures/Product/ProductSlice";
import ProductModal from "./ProductModal";

function Product({ product }) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const removeProduct = (productId) => {
    if (window.confirm("Do you want to remove product?")) {
      dispatch(deleteProduct(productId));
    }
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  console.log(product);
  return (
    <tr>
      <ProductModal
        nme={product.title}
        _id={product._id}
        qty={product.quantity}
        desc={product.description}
        unit={product.price}
        bran={product.brand}
      />

      <td>{product.title}</td>
      <td>{product.quantity}</td>
      <td>{product.description}</td>
      <td>Ksh {product.price}</td>
      <td>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-info"
            data-mdb-toggle="modal"
            data-mdb-target={"#staticBackdrop" + product._id}
          >
            Update
          </button>
          <button
            onClick={() => removeProduct(product._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Product;
