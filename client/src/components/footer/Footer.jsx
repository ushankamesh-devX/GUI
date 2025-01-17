import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-myBlack text-myWhite py-6 mt-48 bottom-0">
      <div className="ml-28 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold text-myYellow mb-4">About Us</h3>
          <p className="text-myGray">
            BuyNest is your one-stop shop for quality products at unbeatable prices. 
            Explore our wide range of categories and enjoy a seamless shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-myYellow mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-myOrange">
              <a href="/home">Home</a>
            </li>
            <li className="mb-2 hover:text-myOrange">
              <a href="/newly-arrived">Newly Arrived</a>
            </li>
            <li className="mb-2 hover:text-myOrange">
              <a href="/best-deal">Best Deals</a>
            </li>
            <li className="mb-2 hover:text-myOrange">
              <a href="/support">Support</a>
            </li>
            <li className="hover:text-myOrange">
              <a href="/about-us">About Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold text-myYellow mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2">Phone: <span className="text-myOrange">0764511038</span></li>
            <li className="mb-2">Email: <span className="text-myOrange">support@buynest.com</span></li>
            <li className="flex space-x-4">
              <a href="#" className="text-myGray hover:text-myOrange">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-myGray hover:text-myOrange">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="text-myGray hover:text-myOrange">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-myGray mt-6">
        <p>&copy; 2025 BuyNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
