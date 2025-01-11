import React from "react";
import StarRating from "../starRating/StarRating";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";

function ItemCard({ product }) {
  return (
    <section className="group relative   w-[280px]">
      <div className="p-4 relative hover:absolute hover:shadow-lg hover:z-20 rounded-2xl transition-all duration-500 ease-in-out">
        <div title="Add to cart" className="hidden group-hover:block absolute z-30 right-5 top-5 ">
        <div className="size-9 bg-myOrange rounded-full flex flex-col items-center justify-center hover:scale-110 transition-all duration-500 ease-in-out">
        <FaCartPlus className="  size-5 text-myWhite text-center"/>
        </div>
          
        </div>
      <img
        src={product.image}
        alt=""
        className="w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />

      <h1 className="font-semibold text-base text-myBlackLite mt-4 line-clamp-2">
        {product.title}
      </h1>

      <div className="flex flex-row items-baseline space-x-2 ">
        <h2>
          <StarRating rating={product.rating} size="1.4em" />
        </h2>
        <p className="text-xs text-myBlack opacity-50">{product.sold} sold</p>
      </div>

      <div className="flex flex-row items-baseline space-x-2">
        <h3 className="text-2xl font-extrabold text-myRed">{product.price}</h3>
        <h4 className="text-base font-bold text-myBlack opacity-50 line-through">
          {product.oldPrice}
        </h4>
      </div>

      <Link>
        <button className="hidden w-full py-2 rounded-lg bg-myOrange text-xl font-bold text-myWhite group-hover:block transition-all duration-500 ease-in-out">
          Buy Now
        </button>
      </Link>
      </div>
    </section>
  );
}

export default ItemCard;
