import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

function Checkout() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container mt-3">
        <h3>Billing Info..</h3>
        <form>
          <div className="row">
            <div className="col-6">
              <div className="mt-3">
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" className="form-control" />
              </div>
            </div>
            <div className="col-6">
              <div className="mt-3">
                <label htmlFor="">phone Number</label>
                <input type="text" name="phone" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-3">
                <label htmlFor="">location</label>
                <input type="text" name="location" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-3">
                <label htmlFor="">road/street</label>
                <input type="text" name="location" className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mt-3">
                <label htmlFor="">House</label>
                <input type="text" name="location" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-3">
                <label htmlFor="">Email</label>
                <input type="text" name="email" className="form-control" />
              </div>
            </div>
          </div>
          <div className="w-100">
            <div className="mt-3">
              <label htmlFor="">Instructions</label>
              <textarea
                name=""
                id=""
                cols="5"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
          </div>

          <div className="mt-3 mb-5 container">
            <button className="btn bg-secondary">Place Order</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
