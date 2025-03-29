import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white font-serif text-primary container mx-auto mt-12 p-6 rounded-t-2xl shadow-md backdrop-blur-md border-t border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">About Us</h2>
          <p className="text-sm text-gray-600 mt-2">
            Discover insightful articles on technology, programming, and
            industry trends. Stay updated with the latest content and learn from
            experts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Quick Links</h2>
          <div className="flex flex-col space-y-2 mt-2 text-sm text-gray-600">
            <Link
              to="/"
              className="hover:text-gray-800 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="hover:text-gray-800 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:text-gray-800 transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-gray-800 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Follow Us</h2>
          <p className="text-sm text-gray-600 mt-2">
            Stay connected with us on social media for updates and exclusive
            deals.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition duration-300"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-6 pt-3 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Hotel Booking. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
