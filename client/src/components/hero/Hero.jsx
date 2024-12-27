import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../ui/commentCarousel/Carousel";
import imgHero from "../../assets/heroImage.png";
import heroFooter from "../../assets/heroFooter.png";

function Hero() {
  const slides = [
    {
      avatar: "https://via.placeholder.com/150",
      name: "John Doe",
      role: "Seller",
      comment:
        "This carousel is super customizable and works perfectly!,lorem10l ",
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "Jane Smith",
      role: "Buyer",
      comment:
        "Loving the text-only design with user details!This carousel is super customizable and works perfectly!",
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "Jane Smith",
      role: "Buyer",
      comment:
        "Loving the text-only design with user details!This carousel is super customizable and works perfectly!",
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "Jane Smith",
      role: "Buyer",
      comment:
        "Loving the text-only design with user details!This carousel is super customizable and works perfectly!",
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "Alice Brown",
      role: "Seller",
      comment:
        "The integration with avatars and dates is just awesome!This carousel is super customizable and works perfectly!",
    },
  ];

  return (
    <div className="h-screen">
      <div className="w-full h-4"></div>
      <section className="grid grid-cols-3 gap-8">
        <div className="col-span-1 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-myBlack">
            Discover Endless <br /> Choices, All in One Place!
          </h1>
          <div className=" p-8 shadow-md rounded-lg flex flex-col">
            <div className="flex flex-row items-center space-x-3">
              <img
                src="https://placehold.co/40"
                alt=""
                className=" size-20 rounded-full "
              />
              <div className="flex flex-col">
                <h3 className=" text-sm italic">Welcome,</h3>
                <h2 className="text-2xl font-semibold">Register/Login</h2>
              </div>
            </div>
            <div className="w-80 grid grid-cols-2 mt-5 gap-4">
              <Link>
                <button className="text-2xl rounded-md bg-myBlack text-myWhite py-2.5 w-full">
                  Register
                </button>
              </Link>
              <Link>
                <button className="w-full text-2xl border-2 border-myBlack rounded-md  text-myBlack py-2">
                  Login
                </button>
              </Link>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-myBlackLite text-center">General Positive Feedback</h3>
        <div className=" my- flex items-center justify-center">
        <Carousel
          slides={slides}
          autoPlay={true}
          interval={2000}
          showArrows={false}
          showIndicators={true}
        />
      </div>
        </div>
        <div className="col-span-2">
          <img src={imgHero} alt="" className="w-full"/>
        </div>
      </section>
      <section className="py-16">
        <img src={heroFooter} alt="" />
      </section>
    </div>
  );
}

export default Hero;
