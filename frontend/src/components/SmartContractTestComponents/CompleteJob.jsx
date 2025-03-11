import { useContext, useState } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

const CompleteJob = () => {
  const { contract } = useContext(BlockchainContext);
  const [jobId, setJobId] = useState("");

  const completeJob = async () => {
    try {
      const tx = await contract.completeJob(jobId);
      await tx.wait();
      alert("Job marked as complete!");
    } catch (error) {
      console.error("Error completing job:", error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Job ID"
        className="p-2 border rounded"
        onChange={(e) => setJobId(e.target.value)}
      />
      <button
        onClick={completeJob}
        className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
      >
        Mark as Completed
      </button>
    </div>
  );
};

export default CompleteJob;
