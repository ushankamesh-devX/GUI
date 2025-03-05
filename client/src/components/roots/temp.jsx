import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { RiSearch2Line } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { RiListUnordered } from "react-icons/ri";
import { FaMobileAlt, FaHamburger, FaTshirt, FaChild } from "react-icons/fa";

// import './navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCatagoryOpen, setIsCatagoryOpen] = useState(false);
  const dropdownRef = useRef(null);
  const catagoryRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleCatagory = () => {
    setIsCatagoryOpen(!isCatagoryOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false); // Close --> if click outSide
    }
  };
  const handleClickOutsideCat = (event) => {
    if (catagoryRef.current && !catagoryRef.current.contains(event.target)) {
      setIsCatagoryOpen(false); // Close --> if click outSide
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideCat);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCat);
    };
  }, []);
  return (
    <div className="z-40 w-full top-0 sticky">
      <nav >
        <section className=" contact flex flex-row justify-center items-center space-x-6 py-1 bg-myYellow">
          <h2 className="text-myWhite" title="Contact 
          within 8:00 am - 5:00 pm">Contact: <span className=" hover:underline">0764511038</span></h2>
          <div className="flex flex-row text-myWhite text-xl space-x-2">
            <Link title="Follow us on Facebook"><RiFacebookBoxFill/></Link>
            <Link title="Contact via Whastapp"><RiWhatsappFill/></Link>
            <Link title="Send us an Email"><RiMailFill/></Link>
          </div>
        </section>
        <Re
        <section className="navbar-upper flex flex-row justify-between items-center px-8 py-4 bg-myBlack">
          <Link to="/" title="BuyNest" className="text-myWhite text-3xl " ><span className="font-semibold text-myYellow">Buy</span>Nest</Link>

          <div className="w-3/6 flex flex-row items-center justify-between search-bar bg-myWhite rounded-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-none rounded-l-full px-6 focus:outline-none"
            />
            <button
              type="submit"
              className="flex flex-row items-center text-myWhite bg-myBlack hover:bg-myBlackLite m-0.5 rounded-full py-1 px-4"
            >
              <p className="pr-4 font-normal ">Search</p>
              <RiSearch2Line className="text-xl" />
            </button>
          </div>
          <div className="auth flex flex-row items-center ">
            <RiUser3Line className="text-myWhite text-3xl mr-1" />
            <div className="-space-y-0.5">
              <p className="text-myGray text-xs">Welcome,</p>
              <button onClick={toggleDropdown}  className="register flex flex-row items-center text-myWhite hover:underline">
                <p>Register/Login</p>
                <RiArrowDropDownLine className="text-2xl translate-y-0.5" />
              </button>
            </div>
          </div>
          {isDropdownOpen && (
            <div ref={dropdownRef} className=" flex flex-col items-center justify-center absolute z-50 right-36 top-20 mt-2 px-6 w-64 bg-white text-black shadow-lg rounded-3xl">
              <div>
                <div className=" flex flex-col items-center py-4 ">
                  <img src="https://placehold.co/64x64" alt="" className="rounded-full" />
                  <h2 className="text-xs font-semibold text-myGray">Welcome</h2>
                  <p className="text-myBlack font-medium">Register/Login</p>
                </div>
              </div>
              <ul className="w-full space-y-2 font-bold text-myBlackLite">
                <li className="hover:underline"><Link>Profile</Link></li>
                <li className="hover:underline"><Link>Cart</Link></li>
                <li className="hover:underline"><Link>Order History</Link></li>
                <li className="hover:underline"><Link>Become Seller</Link></li>
              </ul>
              <div className="grid grid-cols-2 gap-2 pt-8 pb-4">
                <Link to="/register">
              <button className="block w-full px-4 py-1 bg-myBlack text-center hover:underline text-myWhite rounded-full hover:bg-myBlackLite">
                Register
              </button>
                </Link>
                <Link to="/login">
              <button className="block w-full px-4 py-1 text-center border-2 border-myBlack rounded-full font-semibold text-myBlack  hover:bg-gray-100 hover:underline ">
                Login
              </button>
                </Link>
                
              </div>
            </div>
          )}
          <Link to="/cart" title="Go to Cart" className="cart flex flex-row text-myWhite items-start">
            <FaCartShopping className="text-2xl" />

            <div className="cart-count -translate-y-2 -translate-x-2 bg-myWhite border  border-myBlack h-4 w-6 text-center rounded-full text-xs text-myBlack font-bold">4</div>
            {/* <div className="cart-name">Cart</div> */}
          </Link>
        </section>
        <section className="nav-footer flex flex-row justify-between px-8 bg-myBlack border-t-2 py-2">
          <button onClick={toggleCatagory}  className="flex flex-row items-center space-x-2 bg-myBlackLite border border-myBlack border-opacity-25 hover:border-myGray  text-myGray py-1 px-4 rounded-full">
            <p>All Catagories</p>
            <RiListUnordered/>
          </button>
          {isCatagoryOpen && (
            <ul ref={catagoryRef} className="  flex flex-col items-center justify-center absolute z-50 left-5 top-36 mt-2 px- w-64 rounded-lg text-black  ">
              
              <ul className="w-full space-y-2 font-bold text-myBlackLite bg-myWhite rounded-lg border">
      <Link to="store/electronics">
        <li className="hover:underline hover:bg-myGray bg-opacity-50 px-4 py-2 my-2 flex items-center">
          <FaMobileAlt className="mr-2" />
          Electronics Items
        </li>
      </Link>
      <Link to="store/food">
        <li className="hover:underline hover:bg-myGray bg-opacity-50 px-4 py-2 my-2 flex items-center">
          <FaHamburger className="mr-2" />
          Food Items
        </li>
      </Link>
      <Link to="store/clothing">
        <li className="hover:underline hover:bg-myGray bg-opacity-50 px-4 py-2 my-2 flex items-center">
          <FaTshirt className="mr-2" />
          Clothing Items
        </li>
      </Link>
      <Link to="store/kids">
        <li className="hover:underline hover:bg-myGray bg-opacity-50 px-4 py-2 my-2 flex items-center">
          <FaChild className="mr-2" />
          Kids Items
        </li>
      </Link>
    </ul>
            
            </ul>
          )}
          <ul className="flex flex-row text-myGray space-x-9 font-normal">
            <li className="hover:underline"><Link>Home</Link></li>
            <li className="hover:underline"><Link>Newly Arrived</Link></li>
            <li className="hover:underline"><Link>Best Deal</Link></li>
            <li className="hover:underline"><Link to="/support">Support</Link></li>
            <li className="hover:underline"><Link>About us</Link></li>
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
