import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";

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

const OpenGigs = () => {
  return (
    <div>
      <div className="flex gap-8 w-[80%] mx-auto text-md md:text-xl lg:text-3xl ">
        <div>
          <h2 className="font-bold ">Open Gigs</h2>
        </div>
        <div>|</div>
        <div>
          <h2 className="text-gray-800">In Review</h2>
        </div>
        <div>|</div>
        <div>
          <h2 className="text-gray-800">Completed</h2>
        </div>
      </div>

      <div className="h-screen flex flex-col gap-6 p-4">
        {gigs.map((gig) => (
          <div
            key={gig.id}
            className="flex flex-row items-center border border-gray-200 p-4 rounded-lg shadow-md w-full max-w-4xl mx-auto"
          >
            {/* Left - Image */}
            <div className="flex-shrink-0">
              <img
                src={gig.imageUrl}
                alt="Company Logo"
                className="rounded-full h-12 w-12 md:h-16 md:w-16 border border-gray-300"
              />
            </div>

            {/* Right - Job Details */}
            <div className="flex flex-row justify-between w-full ml-4">
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
      </div>
    </div>
  );
};

export default OpenGigs;
