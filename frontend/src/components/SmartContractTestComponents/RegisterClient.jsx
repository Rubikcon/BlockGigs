import { useContext } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

const RegisterClient = () => {
  const { contract } = useContext(BlockchainContext);

  const registerClient = async () => {
    try {
      const tx = await contract.registerClient();
      await tx.wait();
      alert("Client registered successfully!");
    } catch (error) {
      console.error("Error registering client:", error);
    }
  };

  return (
    <button
      onClick={registerClient}
      className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
    >
      Register as Client
    </button>
  );
};

export default RegisterClient;
