import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <Banner title="About us" />
      <div className="container d-flex justify-content-center ">
        <p>To offer a continuous value added product to my customers.</p>
      </div>
    </div>
  );
}

export default About;
