import React from "react";
import StarRating from "../starRating/StarRating";
import { Link } from "react-router-dom";

function ItemCard({ product }) {
  return (
    <section className="group relative p-4 hover:absolute hover:w-[280px] hover:shadow-lg hover:z-20 rounded-2xl transition-all duration-500 ease-in-out">
      {/* Product Image */}
      <img
        src={product.image}
        alt=""
        className="w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />

      {/* Product Title */}
      <h1 className="font-semibold text-base text-myBlackLite mt-4">
        {product.title}
      </h1>

      {/* Rating and Sold Info */}
      <div className="flex flex-row items-baseline space-x-2">
        <h2>
          <StarRating rating={product.rating} size="1.4em" />
        </h2>
        <p className="text-xs text-myBlack opacity-50">{product.sold} sold</p>
      </div>

      {/* Pricing */}
      <div className="flex flex-row items-baseline space-x-2">
        <h3 className="text-2xl font-extrabold text-myRed">{product.price}</h3>
        <h4 className="text-base font-bold text-myBlack opacity-50 line-through">
          {product.oldPrice}
        </h4>
      </div>

      {/* Buy Now Button */}
      <Link>
        <button className="hidden w-full py-2 rounded-lg bg-myOrange text-xl font-bold text-myWhite group-hover:block transition-all duration-500 ease-in-out">
          Buy Now
        </button>
      </Link>
    </section>
  );
}

export default ItemCard;
