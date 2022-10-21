import React from "react";
import Product from "./Product";

function Products({ products }) {
  return (
    <>
      <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 mt-4">
        {products &&
          products.map((product) => {
            return <Product product={product} />;
          })}
      </div>
    </>
  );
}

export default Products;
