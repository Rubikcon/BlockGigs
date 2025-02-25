import { useState } from "react";

const AddFreelancer = ({ contract, signer }) => {
  const [name, setName] = useState("");

  const registerFreelancer = async () => {
    if (!name || !contract) return;
    try {
      const tx = await contract.addFreelancer(name, await signer.getAddress());
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
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={registerFreelancer}
        className="mt-2 bg-green-500 text-white p-2 rounded w-full"
      >
        Register Freelancer
      </button>
    </div>
  );
};

export default AddFreelancer;
