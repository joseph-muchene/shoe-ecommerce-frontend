import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import InfoItems from "./Components/InfoItems";
import LargeInfo from "./Components/LargeInfo";
// import Brands from "./Components/Brands";
import Products from "./Components/Products";
// import Footer from "./Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts, reset } from "./app/Feartures/Product/ProductSlice";

import Questions from "./Components/Questions";
function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.Product);

  useEffect(() => {
    dispatch(getAllProducts());
    // return () => {
    //   dispatch(reset());
    // };
  }, []);
  console.log(products);

  return (
    <>
      <Navbar />
      <Banner />
      {/* <InfoItems /> */}
      <LargeInfo />
      {/* <div className="container">
        <Brands />
      </div> */}

      {/* large text */}
      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h1>Feartured Products </h1>
      </div>
      <div className="container my-3">
        <Products products={products} />
      </div>
      <div className="container mb-3">
        {/* <FAQ.js /> */}
        <h1 className="text-center">Frequently Asked Questions</h1>
        <Questions />
      </div>
    </>
  );
}

export default App;
