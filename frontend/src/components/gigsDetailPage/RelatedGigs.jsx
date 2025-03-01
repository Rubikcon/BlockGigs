import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";
// import Pagination from "./Pagination";

const gigs = [
  {
    id: 1,
    title: "Product Design Intern",
    postedTime: "6 hours ago",
    imageUrl: "./images/role_img.png", // Add an image URL here
  },
  {
    id: 2,
    title: "Frontend Developer",
    postedTime: "1 day ago",
    imageUrl: "./images/role_img.png", // Add an image URL here
  },
  {
    id: 3,
    title: "Blockchain Engineer",
    postedTime: "3 days ago",
    imageUrl: "./images/role_img.png", // Add an image URL here
  },
];

const RelatedGigs = () => {
  return (
    <div>
      <div className="h-full flex flex-col w-full gap-6 p-4 ">
        {gigs.map((gig) => (
          <div
            key={gig.id}
            className="flex flex-row items-center mx-auto  p-4 rounded-lg shadow-md w-[90%]  mx-auto"
          >
            {/* Left - Image */}
            <div className="flex-shrink-0">
              <img
                src={gig.imageUrl}
                alt="Company Logo"
                className="rounded-full h-12  w-12 md:h-20 md:w-20 border border-gray-300"
              />
            </div>

            {/* Right - Job Details */}
            <div className="flex flex-row justify-between md:p-4 w-full ml-4">
              <div>
                <h2 className="text-sm md:text-base font-bold">{gig.title}</h2>
                <small className="text-xs md:text-sm text-gray-600 flex items-center gap-1">
                  <CiClock2 />
                  {gig.postedTime}
                </small>
                <div className="mt-1">
                  <Link
                    to={"#"}
                    className="text-blue-600 text-xs md:text-sm font-semibold"
                  >
                    View Job Details
                  </Link>
                </div>
              </div>

              {/* Button - Positioned at the end */}
              <div className="ml-auto">
                <button className="text-white bg-[#2F66F6] px-4 py-2 md:px-6 md:py-2 rounded-md cursor-pointer text-xs md:text-sm">
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default RelatedGigs;
