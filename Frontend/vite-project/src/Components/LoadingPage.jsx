import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-black-500">
      <div className="text-white text-3xl font-bold animate-pulse text-shadow-lg">Loading...</div>
      <div className="ml-4">
        <div className="w-16 h-16 border-4 border-t-4 border-transparent border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
