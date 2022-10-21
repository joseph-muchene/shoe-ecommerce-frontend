import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getProduct,
  relatedProducts,
  reset,
} from "../app/Feartures/Product/ProductSlice";
import { addItemToCart } from "../app/Feartures/Cart/CartSlice";
import { toast } from "react-toastify";
import RelatedProducts from "../Components/RelatedProducts";
function ProductSingle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, related } = useSelector(({ Product }) => Product);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProduct(id));
    dispatch(relatedProducts(id));
  }, [dispatch, id]);

  const AddToCart = () => {
    const item = {
      productId: id,
      price: product.price,
      title: product.title,
      quantity: 1,
      photo: product.photo,
    };
    dispatch(addItemToCart(item));
    toast.success("product was added to cart");
  };
  // scroll top when react re-renders
  useEffect(() =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  );
  return (
    <div>
      <Navbar />
      <Banner title={product?.title} />
      <div className="row container mt-5">
        <div className="col-md-6">
          <img
            src={!product.photo ? "" : product.photo}
            alt=""
            className="rounded img-thumbnail"
            //   style={{ width: "40vw", height: "60vh" }}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>

          <h2>Ksh {product.price}.00</h2>
          <p>{product.description}</p>

          <div className="d-flex mx-2 flex-column justify-content-center ">
            {product.countInStock > 0 && (
              <p className="mt-3">{product.countInStock} available</p>
            )}
          </div>

          <div className="d-flex mx-3 mt-2">
            <p className="mx-4">
              <div class="d-grid gap-2 my-4">
                <button class="btn btn-primary bold-btn" onClick={AddToCart}>
                  add to cart
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="text-center my-2">Related Products</h3>
        <RelatedProducts products={related} />
      </div>
    </div>
  );
}

export default ProductSingle;
