import React from "react";

function Payment() {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              payment steps
            </h5>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p className="text-center">methods of payment</p>
            <div className="row">
              <div className="col-sm">
                <img
                  src="https://www.mobilepaymentsworld.com/wp-content/uploads/2013/05/M-PESA.jpg"
                  style={{ height: "20vh" }}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>

            <p className="text-center text-danger">
              <strong>Download receipt it will be used to confirm order</strong>
            </p>
            <p className="text-center text-primary">
              For more info dial:
              <strong>+254798447814</strong>
            </p>
          </div>
          <div class="modal-footer">
            <p className="text-center text-primary">
              <strong>Payments will be made during delivery</strong>
              <strong className="text-center"> we will contact you</strong>
            </p>
            <button
              type="button"
              class="btn btn-secondary"
              data-mdb-dismiss="modal"
            >
              Close
            </button>

            <button
              type="button"
              class="btn btn-primary"
              data-mdb-dismiss="modal"
            >
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
