import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-3">
        {/* Previous Button */}
        <button className="p-2 text-gray-600 hover:text-blue-600">
          <FaChevronLeft className="text-lg" />
        </button>

        {/* Page Numbers */}
        {[1, 2, 3, 4, 5].map((page, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md transition ${
              page === 1
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-blue-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button className="p-2 text-gray-600 hover:text-blue-600">
          <FaChevronRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
