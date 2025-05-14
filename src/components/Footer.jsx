import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          <span className="text-teal-600  ">H</span>ome
          <span className="text-teal-600 ">R</span>
          ent
        </Link>
        <p className="text-sm text-gray-500 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} HomeRent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
