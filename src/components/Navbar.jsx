import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            <span className="text-teal-600">H</span>ome
            <span className="text-teal-600">R</span>ent
          </Link>

          <div className="items-center gap-4 hidden md:flex">
            <a href="#features" className="text-xl">
              المميزات
            </a>
            <a href="#work" className="text-xl">
              كيف يعمل
            </a>
            <a href="#AboutUs" className="text-xl">
              عنا
            </a>
            <a href="#contact" className="text-xl">
              تواصل معنا
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700"
            >
              التسجيل
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
