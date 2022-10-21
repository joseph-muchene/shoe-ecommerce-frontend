import React from "react";
import Related from "./Related";

function RelatedProducts({ products }) {
  return (
    <>
      <div class="mb-3 row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 mt-4">
        {products &&
          products.map((product) => {
            return <Related product={product} />;
          })}
      </div>
    </>
  );
}

export default RelatedProducts;
