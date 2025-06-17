import Navigation from "../navigation";
import { jobService } from "../../services/jobService";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
const Hero = ({ gig }) => {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [appliedJobIds, setAppliedJobIds] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleApply = async () => {
    setLoading(true);
    const applicantId = localStorage.getItem("userId");

    if (!applicantId) {
      toast.error("You must be logged in to apply!");
      navigate("/signin");
      return;
    }

    try {
      const gigId = localStorage.getItem("gigId");
      const res = await jobService.applyForJob(gigId, applicantId);

      toast.success("Application submitted successfully!");
      // alert("Application submitted successfully!");

      console.log(res);
      // For debugging
      setLoading(true);
    } catch (error) {
      console.error(
        "Error applying:",
        error.response?.data?.message || error.message
      );
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // get the applied jobs
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      const userId = localStorage.getItem("userId");
      const appliedJobs = await jobService.getAppliedJobsByUser(userId);
      setAppliedJobIds(appliedJobs.map((job) => job._id));
    };

    fetchAppliedJobs();
  }, []);

  return (
    <div className=" flex flex-col ">
      {/* Hero Section (80% height) */}
      <section
        className="relative w-screen h-[80%] min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/hero_banner.png")',
        }}
      >
        <div className="pt-6">
          <Navigation />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D153600] to-[#070C1AB2]"></div>

        {/* Content */}
        <div className="relative flex flex-col mt-10 py-10 md:flex-row gap-4 items-center justify-center w-[90%] mx-auto h-full p-4 text-center">
          {/* The left section of the hero */}
          <div className="w-full md:w-2/3 p-2">
            <div className="p-2 md:text-left text-center">
              <h2 className="text-white font-bold text-2xl md:text-5xl lg:text-6xl my-2">
                {/* Product Design Intern at CryptoKitties */}
                {gig.title}
              </h2>
              <p className="text-white text-sm md:w-[70%] w-full">
                {gig.detail}
              </p>
            </div>
          </div>

          {/* The right section of the hero */}
          <div className="rounded-md bg-white py-5 px-4 w-full md:w-1/3">
            <div>
              <div className="flex gap-2">
                <img
                  src=""
                  alt="logo"
                  className="rounded-full bg-gray-900 h-12 w-12"
                />
                <h3>{gig.title}</h3>
              </div>
              <small>Rate: ${gig.totalPrice} USD per hour</small>
            </div>
            <div className="py-2">
              {appliedJobIds.includes(gig._id) ? (
                <button
                  disabled
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Applied
                </button>
              ) : (
                <button
                  onClick={handleApply}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Apply
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* JoinSection (20% height) */}
      <div className="h-[20%] flex items-center">{/* <JoinSection /> */}</div>
    </div>
  );
};

export default Hero;
