import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import AddProduct from "../Dashboard/AddProduct";
import ClientInfo from "../Dashboard/ClientInfo";
import UpdateProduct from "../Dashboard/UpdateProduct";
import Showcase from "../Dashboard/Showcase";
import { getAllUsers } from "../app/Feartures/User/UserSlice";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import OrdersInfo from "../Dashboard/OrdersInfo";
import { getAllOrders } from "../app/Feartures/Order/OrderSlice";
function Dashboard() {
  const [toggle, setToggleState] = useState({
    AddProduct: true,
    UpdateProduct: false,
    orders: false,
    analytics: false,
    showcase: false,
  });
  const toggleProd = () => {
    setToggleState((prevState) => ({
      ...prevState,
      orders: false,
      AddProduct: false,
      UpdateProduct: false,
      analytics: false,
      showcase: true,
    }));
  };

  const createProd = () => {
    setToggleState((prevState) => ({
      ...prevState,
      AddProduct: true,
      UpdateProduct: false,
      analytics: false,
      showcase: false,
      orders: false,
    }));
  };
  const showAnalytics = () => {
    setToggleState((prevState) => ({
      ...prevState,
      AddProduct: false,
      UpdateProduct: false,
      analytics: true,
      showcase: false,
      orders: false,
    }));
  };

  const showOrders = () => {
    setToggleState((prevState) => ({
      ...prevState,
      orders: true,
      AddProduct: false,
      UpdateProduct: false,
      analytics: false,
      showcase: false,
    }));
  };

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.User);
  const { orders } = useSelector((state) => state.Order);
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllOrders());
  }, [dispatch]);

  const analyticData = [
    {
      id: "1",
      name: "orders",
      total: orders?.length,
    },
    {
      id: "2",
      name: "customers",
      total: users?.length,
    },
  ];
  return (
    <>
      <Navbar />

      <div style={{ width: "100%" }} className="contain__items">
        <div className="sideNav">
          <ul className="list-group">
            <div className=" mx-3 mt-4 d-flex flex-column gap-3">
              <li onClick={toggleProd}>
                <i class="fa-solid fa-bag-shopping"></i> Products
              </li>
              <li onClick={showOrders}>
                <i class="fa-solid fa-truck"></i> Orders
              </li>
              <li onClick={showAnalytics}>
                <i class="fa-solid fa-chart-pie"></i> Analytics
              </li>
            </div>
          </ul>
        </div>

        <div className="main">
          <div className=" ">
            {toggle.analytics && (
              <>
                <div className=" row container d-flex mx-2 my-2">
                  {analyticData.map((data) => {
                    return <Card data={data} />;
                  })}
                </div>

                <ClientInfo />
              </>
            )}
            {toggle.AddProduct && (
              <>
                <div className="container">
                  <AddProduct />
                </div>
              </>
            )}

            {toggle.UpdateProduct && (
              <>
                <UpdateProduct />
              </>
            )}
            {toggle.showcase && (
              <>
                <Showcase createProd={createProd} />
              </>
            )}
            {toggle.orders && (
              <>
                <OrdersInfo />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
