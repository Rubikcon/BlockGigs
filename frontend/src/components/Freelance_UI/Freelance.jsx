import { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractABI from "../abi/MilestonePayment.json";

const CONTRACT_ADDRESS = "YOUR_SMART_CONTRACT_ADDRESS";

export default function FreelancePlatform() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState({
    totalAmount: "",
    milestoneCount: "",
    milestonePayments: "",
  });

  useEffect(() => {
    async function connectWallet() {
      if (window.ethereum) {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        const web3Signer = web3Provider.getSigner();
        const smartContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          contractABI,
          web3Signer
        );

        setProvider(web3Provider);
        setSigner(web3Signer);
        setContract(smartContract);
      }
    }
    connectWallet();
  }, []);

  const createJob = async () => {
    if (!contract) return;
    const { totalAmount, milestoneCount, milestonePayments } = jobDetails;
    const parsedMilestones = milestonePayments.split(",").map(Number);
    try {
      const tx = await contract.createJob(
        ethers.utils.getAddress("YOUR_TOKEN_ADDRESS"),
        ethers.utils.parseEther(totalAmount),
        milestoneCount,
        parsedMilestones.map((m) => ethers.utils.parseEther(m.toString()))
      );
      await tx.wait();
      alert("Job Created Successfully!");
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Freelance Platform</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Total Amount (ETH)"
          className="border p-2 w-full"
          value={jobDetails.totalAmount}
          onChange={(e) =>
            setJobDetails({ ...jobDetails, totalAmount: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Number of Milestones"
          className="border p-2 w-full mt-2"
          value={jobDetails.milestoneCount}
          onChange={(e) =>
            setJobDetails({ ...jobDetails, milestoneCount: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Milestone Payments (comma-separated)"
          className="border p-2 w-full mt-2"
          value={jobDetails.milestonePayments}
          onChange={(e) =>
            setJobDetails({ ...jobDetails, milestonePayments: e.target.value })
          }
        />
        <button
          onClick={createJob}
          className="bg-blue-500 text-white p-2 mt-3 w-full rounded"
        >
          Create Job
        </button>
      </div>
    </div>
  );
}
