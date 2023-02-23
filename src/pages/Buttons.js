import React from "react";
import ProductCard from "../components/ProductCard";
 import Home from "./Home";

const Buttons = ({ product, productCategory }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {productCategory.map((product, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              key={id}
            >
              {product}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => product(product.category)}
        >
          All
        </button>
       </div>
    </>
  );
};
 
export default Buttons;