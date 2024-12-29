import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import imgContact from "../../assets/contact-image.png";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="flex flex-row space-x-7">
        {/* Left Side: Image */}
        <div className="abs">
          <img
            src={imgContact}
            alt="Contact Us"
            className=" absolute w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Get in Touch with Us
          </h2>
          <p className="text-gray-600">
            We’re here to assist you. Reach out to us via any of the following
            methods.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {/* Email */}
            <div className="flex items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
              <HiMail className="text-4xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:support@yourstore.com"
                    className="text-blue-500 underline"
                  >
                    support@yourstore.com
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
              <HiPhone className="text-4xl text-green-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+94761234567" className="text-green-500 underline">
                    +94 76 123 4567
                  </a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
              <HiLocationMarker className="text-4xl text-red-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Visit Us</h3>
                <p className="text-gray-600">
                  123 Commerce Street,
                  <br />
                  Colombo 00100, Sri Lanka
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800">Business Hours</h3>
            <p className="text-gray-600 mt-2">
              Monday to Friday: 9 AM – 6 PM
              <br />
              Saturday: 10 AM – 4 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
