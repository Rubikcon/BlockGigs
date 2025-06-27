import React from "react";
import { PiEmpty } from "react-icons/pi";
const EmptyStateCard = ({ props }) => {
  return (
    <div className="w-full max-w-md mx-auto my-10  p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center">
      <div className="text-blue-500 text-5xl mb-4 ">
        <PiEmpty />
      </div>
      <h2 className="text-lg font-semibold text-gray-800">{props}</h2>
      {/* <p className="text-sm text-gray-500 mt-2">
        Looks like you haven’t added anything yet. When you do, it’ll show up
        here.
      </p> */}
    </div>
  );
};

export default EmptyStateCard;
