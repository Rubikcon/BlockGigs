import { Contract } from "ethers";
import CONTRACT_ABI from "../config/contractABI.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

export const registerUser = async (signer, userData) => {
  if (!signer) {
    throw new Error("No signer provided");
  }

  try {
    const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    const tx = await contract.registerFreelancer(userData.name, userData.role);

    // Wait for transaction confirmation
    const receipt = await tx.wait();
    console.log("Registration successful:", receipt);

    return receipt;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};

// Optional: Add more registration-related functions
export const registerClient = async (signer, userData) => {
  if (!signer) {
    throw new Error("No signer provided");
  }

  try {
    const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    const tx = await contract.registerClient(userData.name, userData.role);

    const receipt = await tx.wait();
    console.log("Client registration successful:", receipt);

    return receipt;
  } catch (error) {
    console.error("Client registration failed:", error);
    throw error;
  }
};

// HOW TO USE THE FUNCTION ABOVE
// import { registerUser, registerClient } from '../utils/registerUser';

// // Later in your code when you need to register:
// try {
//     await registerUser(signer, {
//         name: "User Name",
//         role: "freelancer"
//     });
// } catch (error) {
//     console.error("Registration failed:", error);
// }
//
