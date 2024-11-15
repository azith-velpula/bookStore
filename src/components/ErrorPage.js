import React from "react";

const ErrorPage = ({
  message = "Something went wrong, please try again later.",
}) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">
          Oops! Something Went Wrong
        </h1>
        <p className="text-gray-700">{message}</p>
        <br />
        <a
          href="/"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Home Page
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
