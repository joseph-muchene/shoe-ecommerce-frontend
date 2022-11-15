import React from "react";

import { Link, useNavigate } from "react-router-dom";

function Related({ product }) {
  const navigate = useNavigate();
  const onRedirect = (id) => {
    navigate(`/product-single/${id}`);
  };

  return (
    <>
      <div class="col-md-2 hp">
        <div class="card h-100 shadow-sm">
          <Link to={`/product-single/${product?._id}`}>
            <img
              src={
                product.photo === ""
                  ? "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/684225/1.jpg?6921"
                  : product.photo
              }
              class="img-thumbnail w-100"
            />
          </Link>

          <div class="label-top shadow-sm">
            <Link class="text-white" to="#">
              {product.title}
            </Link>
          </div>
          <div class="card-body">
            <div class="clearfix mb-3">
              <span class="float-start badge rounded-pill bg-success">
                Ksh {product.price}
              </span>

              {product.rating > 0 && (
                <span class="float-end">
                  <Link to="#" class="small text-muted  aff-link">
                    rating {product.rating}.00
                  </Link>
                </span>
              )}
            </div>
            <p class="card-title">
              <Link to="#">{product.title}</Link>
            </p>

            {/* <div class="d-grid gap-2 my-4">
              <button class="btn btn-warning bold-btn" onClick={AddToCart}>
                add to cart
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Related;
