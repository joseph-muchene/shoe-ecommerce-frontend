import React from "react";

function UpdateProduct() {
  return (
    <div>
      <div>
        <form>
          <div>
            <div className="mt-3">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mt-3">
              <label htmlFor="desc">desc</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mt-3">
              <label htmlFor="title">price</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mt-3">
              <select name="category" id="category">
                <option value="#"></option>
                <option value="">Gin</option>
                <option value="">Gin</option>
                <option value="">Gin</option>
                <option value="">Spirit</option>
              </select>
            </div>
            <div className="mt-3">
              <label htmlFor="brand">brand</label>
              <input type="text" className="form-control" />
            </div>

            <div>
              <div className="mt-3">
                <button className="btn">update Product</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
