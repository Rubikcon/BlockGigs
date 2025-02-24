import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Pagination = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-5 md:gap-90">
        {/* Previous Button */}
        <div className=" flex items-center gap-4">
          <button className=" flex p-2 text-gray-600 hover:text-blue-600">
            <BiLeftArrow className="text-lg" /> Previous
          </button>

          <button className=" flex p-2 text-gray-600 hover:text-blue-600">
            Next <BiRightArrow className="text-lg" />
          </button>
        </div>

        <div>
          {/* Page Numbers */}
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
        {/* Next Button */}
        {/* <button className="p-2 text-gray-600 hover:text-blue-600">
          <BiRightArrow className="text-lg" />
        </button> */}
      </div>
    </div>
  );
};

export default Pagination;
