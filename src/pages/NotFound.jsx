import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! We ran out of code
        </h1>
        <h2 className="text-2xl text-gray-600">Page Not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;
