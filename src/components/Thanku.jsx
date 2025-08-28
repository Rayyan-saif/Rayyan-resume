import React from "react";

const ThankYou = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-gray-300 mb-6">
        Your message has been successfully sent. I’ll get back to you soon!
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-500 rounded-md hover:bg-blue-700 font-semibold transition"
      >
        Back to Home
      </a>
    </div>
  );
};

export default ThankYou;
