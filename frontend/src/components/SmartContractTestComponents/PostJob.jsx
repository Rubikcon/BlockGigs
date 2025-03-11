import { useContext, useState } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

const PostJob = () => {
  const { contract } = useContext(BlockchainContext);
  const [description, setDescription] = useState("");

  const postJob = async () => {
    try {
      const tx = await contract.postJob(description);
      await tx.wait();
      alert("Job posted successfully!");
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Job Description"
        className="border p-2 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={postJob}
        className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Post Job
      </button>
    </div>
  );
};

export default PostJob;
