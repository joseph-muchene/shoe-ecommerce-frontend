import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateOrder } from "../app/Feartures/Order/OrderSlice";

function OrderModal({ stat, _id }) {
  const [formData, setFormData] = useState({
    status: stat,
  });
  const { status } = formData;

  const handleOnChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      status,
    };

    const payload = {
      orderData,
      orderId: _id,
    };
    try {
      dispatch(updateOrder(payload));
    } catch (err) {
      console.log(err);
    }
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
              Order status
            </h5>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form className="form" onSubmit={onSubmit}>
              <div className="mt-3 mb-2">
                <label>status</label>
                <input
                  type="text"
                  className="form-control"
                  name="status"
                  value={status}
                  onChange={handleOnChange}
                />
              </div>
              <button class="btn btn-primary">update status</button>
            </form>
            <h2 className="mx-3 h3 mt-3">Options to select:</h2>

            <ul className="list-group">
              <li className="list-item">
                <span>&#10003;</span>pending
              </li>
              <li className="list-item">
                <span>&#10003;</span>Not processed
              </li>
              <li className="list-item">
                <span>&#10003;</span>delivered
              </li>
              <li className="list-item">
                <span>&#10003;</span>cancelled
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-success">
              save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
