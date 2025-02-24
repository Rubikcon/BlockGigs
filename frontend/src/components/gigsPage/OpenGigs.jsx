import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const gigs = [
  {
    id: 1,
    title: "Product Design Intern",
    postedTime: "6 hours ago",
    imageUrl: "./images/job.png", // Add an image URL here
  },
  {
    id: 2,
    title: "Frontend Developer",
    postedTime: "1 day ago",
    imageUrl: "./images/job.png", // Add an image URL here
  },
  {
    id: 3,
    title: "Blockchain Engineer",
    postedTime: "3 days ago",
    imageUrl: "./images/job.png", // Add an image URL here
  },
];

const OpenGigs = () => {
  return (
    <section>
      <div className="flex gap-3 text-md md:text-xl  lg:text-3xl ml-10 py-5">
        <h2 className="font-bold">Open Gigs</h2>
        <div>|</div>
        <h2 className="text-gray-500">In Review</h2>
        <div>|</div>
        <h2 className="text-gray-500">Completed</h2>
      </div>
      <div className="h-screen flex flex-col gap-6 p-4">
        {gigs.map((gig) => (
          <div
            key={gig.id}
            className="flex flex-row items-center border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md w-full  max-[80%] mx-auto"
          >
            {/* Left - Image */}
            <div className="flex-shrink-0">
              <img
                src={gig.imageUrl}
                alt="Company Logo"
                className="rounded-full h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 border border-gray-300"
              />
            </div>

            {/* Right - Job Details */}
            <div className="flex flex-row justify-between w-full ml-4">
              <div>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold">
                  {gig.title}
                </h2>
                <small className="text-sm sm:text-base lg:text-lg text-gray-600 flex items-center gap-1">
                  <CiClock2 className="text-lg sm:text-xl lg:text-2xl" />
                  {gig.postedTime}
                </small>
                <div className="mt-1">
                  <Link
                    to={"#"}
                    className="text-blue-600 text-sm sm:text-base lg:text-lg font-semibold"
                  >
                    View Job Details
                  </Link>
                </div>
              </div>

              {/* Button - Positioned at the end */}
              <div className="ml-auto">
                <button className="text-white bg-[#2F66F6] px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-md cursor-pointer text-sm sm:text-base lg:text-lg">
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination element */}
        <Pagination />
      </div>
    </section>
  );
};

export default OpenGigs;
