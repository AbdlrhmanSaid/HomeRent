import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:items-center lg:justify-between lg:flex-row-reverse">
        <div className="p-3 m-auto max-w-2xl text-center lg:text-right">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl leading-tight">
            اجعل حياتك الإيجارية أسهل مع
            <span className="block text-teal-600 mt-2">HomeRent.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            أدر مستأجريك وعقاراتك الإيجارية بسهولة وفعالية. كل شيء في مكان واحد.
          </p>

          <div className="m-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/login"
              className="inline-block rounded-md bg-teal-600 px-8 py-3 text-sm font-medium text-white hover:bg-teal-700"
            >
              ابدأ
            </Link>

            <a
              href="#features"
              className="inline-block rounded-md border border-gray-300 px-8 py-3 text-sm font-medium text-teal-600 hover:bg-gray-100"
            >
              معرفة المزيد
            </a>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1732812608429-67bd0ff463ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Home rent illustration"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
