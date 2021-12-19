import React from "react";
import BestProduct from "./BestProduct";
import { bestProduct, product } from "../../assets/data";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div className="product">
      <div className="best-products">
        <div className="best-products_title">
          <h1>BEST PRODUCT</h1>
          <p>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can ve trimmed. Take the first
          </p>
        </div>
        <div className="best-products_image">
          <div className="grid grid-col-3">
            {bestProduct.map((item, index) => (
              <BestProduct
                key={index}
                pos={item.pos}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="product_list">
        <div className="grid grid-col-5">
          {product.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              like={item.like}
            />
          ))}
        </div>
      </div>
      <button className="product_button">SEE MORE</button>
    </div>
  );
};

export default Product;
