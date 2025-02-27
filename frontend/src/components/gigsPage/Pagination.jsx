import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const Pagination = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-20 md:gap-35">
        <div className="flex gap-5">
          {/* Previous Button */}
          <button className="p-2 text-gray-600 hover:text-blue-600 flex gap-2">
            <BiLeftArrow className="text-lg" />{" "}
            <span className="text-sm">Previous</span>
          </button>
          {/* Next Button */}
          <button className="p-2 text-gray-600 hover:text-blue-600 flex gap-2">
            <span className="text-sm"> Next</span>{" "}
            <BiRightArrow className="text-lg" />
          </button>
        </div>
        {/* Page Numbers */}
        <div>
          {[1, 2, 3, 4, 5].map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-full transition ${
                page === 1
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
