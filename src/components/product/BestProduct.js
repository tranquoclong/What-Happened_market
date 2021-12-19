import React from "react";
import PropTypes from "prop-types";
import goIcon from "../../assets/Images/go-icon.png";

const BestProduct = (props) => {
  return (
    <div className="best-product">
      <span className="best-product_p">
        <img src={props.pos} alt="" />
      </span>
      <img className="best-product_image" src={props.img} alt={props.img} />
      <div className="best-product_title">
        <p className="title">{props.title}</p>
        <img src={goIcon} alt="" />
      </div>
    </div>
  );
};

BestProduct.propTypes = {
  pos: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BestProduct;
