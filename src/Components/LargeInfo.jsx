import React from "react";
import Bg from "./shoe.jpg";
function LargeInfo() {
  return (
    <div className="row container mt-5">
      <div className="col-md-6">
        <img
          src={Bg}
          alt=""
          className="rounded img-thumbnail"
          //   style={{ width: "40vw", height: "60vh" }}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <span>since 2022</span>
        <h1>Why Choose Us</h1>
        <p>
          We are online one stop shop where your looks get scaled to the top, we
          sell the best modern shoes present in the world today. We dont just
          sell because everyone is doing it, we deliver what fits and what will
          look the best with that outfit.
          <strong>you look stunning!</strong>
        </p>
      </div>
    </div>
  );
}

export default LargeInfo;
