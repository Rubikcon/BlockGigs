import { useContext, useEffect, useState } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

const JobList = () => {
  const { contract } = useContext(BlockchainContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobCount = await contract.getJobCount();
        let jobArray = [];
        for (let i = 0; i < jobCount; i++) {
          const job = await contract.jobs(i);
          jobArray.push({
            id: i,
            description: job.description,
            price: job.price.toString(),
            status: job.completed ? "Completed" : "In Progress",
          });
        }
        setJobs(jobArray);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [contract]);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Available Jobs</h2>
      <ul className="mt-2">
        {jobs.map((job) => (
          <li key={job.id} className="p-2 border rounded mb-2">
            <strong>{job.description}</strong> - {job.price} ETH ({job.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
