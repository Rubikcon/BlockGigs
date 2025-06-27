import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { jobService } from "../../services/jobService";
import { Toaster, toast } from "react-hot-toast";

// Pagination settings
const ITEMS_PER_PAGE = 3;

const ApplicantsCard = ({ gigId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [applicants, setApplicants] = useState([]);
  const [responseMessage, setResponseMessage] = "";

  // get gig id from props
  const returnedJobId = gigId;

  const totalPages = Math.ceil(applicants.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const handleApproveGigs = async (passedTalentId) => {
    let returnedTalentId = passedTalentId;

    try {
      const response = await jobService.clientApprovesJob(
        returnedJobId,
        returnedTalentId
      );
      console.log(response);
      toast.success(responseMessage, {
        duration: 30000,
      });
    } catch (err) {
      console.error(err.message || "Error approving applications");
    }
  };

  const paginatedApplicants = applicants.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleFetchApplicants = async () => {
    try {
      const response = await jobService.getApplicantsForAJob(returnedJobId);

      const transformed = response.applicants.map((talent) => ({
        id: talent._id,
        name: talent.fullname,
        role: "Unknown Role",
        // change this if you have the field

        appliedTime: "Just now",
        // placeholder for now

        imageUrl: "/images/user_avatar.png",
      }));

      setApplicants(transformed);
    } catch (err) {
      console.log(err.message || "Error fetching applicants for this job");
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    handleFetchApplicants();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-left ml-4">Applicants</h2>
      <div className="flex flex-col w-full gap-6 p-4">
        {paginatedApplicants.map((applicant) => (
          <div
            key={applicant.id}
            className="flex flex-row items-center p-4 rounded-lg shadow-md w-[90%] mx-auto"
          >
            {/* Left - Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={applicant.imageUrl}
                alt="Applicant"
                className="rounded-full h-12 w-12 md:h-20 md:w-20 border border-gray-300"
              />
            </div>

            {/* Right - Info & Actions */}
            <div className="flex flex-row justify-between md:p-4 w-full ml-4">
              <div>
                <h2 className="text-sm md:text-base font-bold">
                  {applicant.name}
                </h2>
                <p className="text-xs md:text-sm text-gray-700">
                  {applicant.role}
                </p>
                <small className="text-xs md:text-sm text-gray-600 flex items-center gap-1">
                  <CiClock2 />
                  Applied: {applicant.appliedTime}
                </small>
                <div className="mt-1">
                  <Link
                    to={`/talent-detail/${applicant.id}`}
                    className="text-blue-600 text-xs md:text-sm font-semibold"
                  >
                    View Profile
                  </Link>
                </div>
              </div>

              {/* Approve / Reject Buttons */}
              <div className="ml-auto space-x-2 flex flex-col md:flex-row items-start md:items-center">
                <button
                  onClick={() => handleApproveGigs(applicant.id)}
                  className="cursor-pointer text-white bg-green-900 px-3 py-1 rounded-md text-xs md:text-sm"
                >
                  Approve
                </button>
                <button className="cursor-pointer text-white bg-red-500 px-3 py-1 rounded-md text-xs md:text-sm">
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 mr-2 rounded-md text-sm ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white"
            }`}
          >
            Prev
          </button>
          <span className="px-2 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 ml-2 rounded-md text-sm ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsCard;
