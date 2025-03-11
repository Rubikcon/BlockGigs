import { useContext, useState } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

const ResolveDispute = () => {
  const { contract } = useContext(BlockchainContext);
  const [jobId, setJobId] = useState("");
  const [decision, setDecision] = useState(""); // Client or Freelancer

  const resolveDispute = async () => {
    try {
      const tx = await contract.resolveDispute(jobId, decision);
      await tx.wait();
      alert("Dispute resolved successfully!");
    } catch (error) {
      console.error("Error resolving dispute:", error);
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
      <select
        className="p-2 border rounded"
        onChange={(e) => setDecision(e.target.value)}
      >
        <option value="">Select Winner</option>
        <option value="client">Client</option>
        <option value="freelancer">Freelancer</option>
      </select>
      <button
        onClick={resolveDispute}
        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
      >
        Resolve Dispute
      </button>
    </div>
  );
};

export default ResolveDispute;
