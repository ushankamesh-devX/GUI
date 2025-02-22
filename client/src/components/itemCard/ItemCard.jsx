import React from "react";
import StarRating from "../starRating/StarRating";
import "./itemCard.css";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";

function ItemCard({ product }) {
  return (
    <section className="item-card">
      <div className="item-card-content">
        <button title="Add to cart" className="item-card-cart-icon">
          <div className="cart-icon-wrapper">
            <FaCartPlus className="cart-icon" />
          </div>
        </button>

        <img
          src={product.image}
          alt=""
          className="item-card-image"
        />

        <div className="item-details">

        <h1 className="item-card-title">
          {product.title}
        </h1>

        <div className="item-card-rating">
          <h2>
            <StarRating rating={product.rating} size="1.4em" />
          </h2>
          <p className="item-card-sold">{product.sold} sold</p>
        </div>

        <div className="item-card-prices">
          <h3 className="item-card-price">LKR {product.price}</h3>
          <h4 className="item-card-old-price">{product.oldPrice}</h4>
        </div>
        </div>

        <Link>
          <button title="more details" className="item-card-buy-button">
            Buy Now
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ItemCard;
