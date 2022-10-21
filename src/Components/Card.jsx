import React from "react";

function Card({ data }) {
  return (
    <div className="col-md-6 mb-2">
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body d-flex flex-row gap-2">
          <div>
            <h5>{data.name}</h5>
          </div>
          <div>{data.total}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
