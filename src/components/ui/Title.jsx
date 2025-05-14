import React from "react";

const Title = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-start"}`}>
      <h2
        className={`text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 ${
          center ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-gray-600 text-base md:text-lg leading-relaxed ${
            center ? "mx-auto max-w-2xl" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;
