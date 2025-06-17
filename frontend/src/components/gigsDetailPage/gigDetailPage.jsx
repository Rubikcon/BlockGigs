import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Detail from "./Details";
import Footer from "../footer";
import { jobService } from "../../services/jobService"; // Adjust path as needed

const GigDetailPage = () => {
  const { id } = useParams(); // get gig ID from URL
  const [gig, setGig] = useState(null);

  useEffect(() => {
    const fetchGig = async () => {
      try {
        const response = await jobService.getAllJobs(); // or jobService.getJobById(id) if you have that
        const gigFound = response.jobs.find((job) => job._id === id);
        setGig(gigFound);

        console.log(gigFound);
      } catch (err) {
        console.error("Failed to fetch gig", err);
      }
    };

    fetchGig();
  }, [id]);

  if (!gig) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div>
      <Hero gig={gig} />
      <Detail gig={gig} />
      <Footer />
    </div>
  );
};

export default GigDetailPage;
