import { useContext, useState } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

const ReleasePayment = () => {
  const { contract } = useContext(BlockchainContext);
  const [jobId, setJobId] = useState("");

  const releasePayment = async () => {
    try {
      const tx = await contract.releasePayment(jobId);
      await tx.wait();
      alert("Payment released successfully!");
    } catch (error) {
      console.error("Error releasing payment:", error);
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
        onClick={releasePayment}
        className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
      >
        Release Payment
      </button>
    </div>
  );
};

export default ReleasePayment;
