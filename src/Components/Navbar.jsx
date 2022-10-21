import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
function Navbar() {
  const { cartItems } = useSelector((state) => state.Cart.Cart);
  const { user } = useSelector((state) => state.Auth);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <Link class="navbar-brand mt-2 mt-lg-0" to="/">
              Azim shoe store
            </Link>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link" to="#">
                  About
                </Link>
              </li> */}
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Shop
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <Link class="text-reset me-3" to="/cart">
              <i class="fas fa-shopping-cart"></i>
              <span class="badge rounded-pill badge-notification bg-primary ">
                {cartItems?.length}
              </span>
            </Link>

            {user && user !== null && user?.isAdmin && (
              <div class="dropdown">
                <a
                  class="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-user"></i>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link class="dropdown-item" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            <Link class="text-reset me-3 btn btn-primary mx-3" to="/login">
              <i class="fa-solid fa-right-to-bracket text-white"></i>
              <span className="mx-2 text-white">login</span>
            </Link>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
