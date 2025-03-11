import { useContext, useState } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

const AssignFreelancer = () => {
  const { contract } = useContext(BlockchainContext);
  const [jobId, setJobId] = useState("");
  const [freelancerAddress, setFreelancerAddress] = useState("");

  const assignFreelancer = async () => {
    try {
      const tx = await contract.assignFreelancer(jobId, freelancerAddress);
      await tx.wait();
      alert("Freelancer assigned successfully!");
    } catch (error) {
      console.error("Error assigning freelancer:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Job ID"
        className="border p-2 rounded"
        value={jobId}
        onChange={(e) => setJobId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Freelancer Address"
        className="border p-2 rounded ml-2"
        value={freelancerAddress}
        onChange={(e) => setFreelancerAddress(e.target.value)}
      />
      <button
        onClick={assignFreelancer}
        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Assign Freelancer
      </button>
    </div>
  );
};

export default AssignFreelancer;
