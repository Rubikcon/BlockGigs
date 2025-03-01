// This component registers the freelancer to the application.

import { useState } from "react";
import { Contract } from "ethers";
import CONTRACT_ABI from "./contractDetails/contractABI.json";

const CONTRACT_ADDRESS = "0x3a5b97549f62c5218b8Ac01F239ff8e86F69edE4";

const AddFreelancer = ({ signer }) => {
  const [name, setName] = useState("");

  // Create contract instance with signer
  const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  const registerFreelancer = async () => {
    if (!name || !contract) return;

    try {
      const connectedContract = contract.connect(signer); // Ensure contract has signer
      const tx = await connectedContract.registerFreelancer(name);
      await tx.wait();
      alert("Freelancer Registered Successfully!");
    } catch (error) {
      console.error("Error registering freelancer:", error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Talent Anonymous Name Here"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={registerFreelancer}
        className="mt-2 bg-green-500 text-white p-2 rounded w-full cursor-pointer"
      >
        Register Freelancer
      </button>
    </div>
  );
};

export default AddFreelancer;
