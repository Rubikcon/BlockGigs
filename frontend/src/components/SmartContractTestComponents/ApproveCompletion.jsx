import { useContext, useState } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

const ApproveCompletion = () => {
  const { contract } = useContext(BlockchainContext);
  const [jobId, setJobId] = useState("");

  const approveCompletion = async () => {
    try {
      const tx = await contract.approveJobCompletion(jobId);
      await tx.wait();
      alert("Job completion approved!");
    } catch (error) {
      console.error("Error approving completion:", error);
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
        onClick={approveCompletion}
        className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
      >
        Approve Completion
      </button>
    </div>
  );
};

export default ApproveCompletion;
