import { useState } from "react";

const ApproveMilestone = ({ contract }) => {
  const [jobId, setJobId] = useState("");

  const approveMilestone = async () => {
    if (!contract || !jobId) return;
    try {
      const tx = await contract.approveMilestone(jobId);
      await tx.wait();
      alert("Milestone Approved!");
    } catch (error) {
      console.error("Error approving milestone:", error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="number"
        placeholder="Job ID"
        value={jobId}
        onChange={(e) => setJobId(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={approveMilestone}
        className="mt-2 bg-orange-500 text-white p-2 rounded w-full"
      >
        Approve Milestone
      </button>
    </div>
  );
};

export default ApproveMilestone;
