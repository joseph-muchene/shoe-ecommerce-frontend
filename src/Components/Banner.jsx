import React from "react";

function Banner({ title }) {
  return (
    <div
      class="d-flex bg-image justify-content-center align-items-center "
      style={{
        backgroundImage: `url(https://media.architecturaldigest.com/photos/57a11cbeb6c434ab487bc26b/4:3/w_1032,h_774,c_limit/nikes-senior-designer-explains-what-went-into-new-air-jordan-01.png)`,
        height: "50vh",
      }}
    >
      {/* <img
        src={Bg}
        class="img-fluid"
        style={{ height: "60vh", width: "100vw" }}
        alt="Camera"
      /> */}

      <h3 className="text-white">
        {!title ? "Azim Online Shoe Store." : title}
      </h3>
    </div>
  );
}

export default Banner;
