import React from "react";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const StarRating = ({ rating = 0, size = "1em" }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => {
        const value = index + 1;

        return (
          <div key={index} className="flex items-center" style={{ fontSize: size }}>
            {rating >= value ? (
              <RiStarFill className="text-myYellow"  />
            ) : rating > index ? (
              <RiStarHalfFill className="text-myYellow" />
            ) : (
              <RiStarLine className="text-gray-300" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
