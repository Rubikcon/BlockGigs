import { useContext } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

const RegisterFreelancer = () => {
  const { contract } = useContext(BlockchainContext);

  const registerFreelancer = async () => {
    try {
      const tx = await contract.registerFreelancer();
      await tx.wait();
      alert("Freelancer registered successfully!");
    } catch (error) {
      console.error("Error registering freelancer:", error);
    }
  };

  return (
    <button
      onClick={registerFreelancer}
      className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
    >
      Register as Freelancer
    </button>
  );
};

export default RegisterFreelancer;
