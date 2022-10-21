import React from "react";

function InfoItem({ item }) {
  return (
    <div className="col-md ">
      <div class="card">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center mt-2">
            <span dangerouslySetInnerHTML={{ __html: item.logo }}></span>
          </div>
          <div className="col-ms-8">
            <div class="card-header">{item.title}</div>
            <div class="card-body">
              <p class="card-text">{item.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
