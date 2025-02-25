// import { ethers } from "ethers";

// Defining Contract Address Details

// const contractAddress =
// ("0xe553100b4178d81f78f074dbf9ba3797db80b07e734f6658f4bfb81679d57b44");
// import JoinSection from "./joinSection";

// const contractABI = [
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_jobId",
//         type: "uint256",
//       },
//       {
//         internalType: "address",
//         name: "_freelancer",
//         type: "address",
//       },
//     ],
//     name: "assignFreelancer",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_jobId",
//         type: "uint256",
//       },
//     ],
//     name: "completeJob",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "_description",
//         type: "string",
//       },
//       {
//         internalType: "uint256",
//         name: "_amount",
//         type: "uint256",
//       },
//     ],
//     name: "postJob",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "_name",
//         type: "string",
//       },
//     ],
//     name: "registerFreelancer",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_jobId",
//         type: "uint256",
//       },
//     ],
//     name: "releasePayment",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_tokenAddress",
//         type: "address",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     name: "freelancers",
//     outputs: [
//       {
//         internalType: "string",
//         name: "name",
//         type: "string",
//       },
//       {
//         internalType: "address",
//         name: "walletAddress",
//         type: "address",
//       },
//       {
//         internalType: "bool",
//         name: "isRegistered",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "jobCounter",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     name: "jobs",
//     outputs: [
//       {
//         internalType: "address",
//         name: "client",
//         type: "address",
//       },
//       {
//         internalType: "string",
//         name: "description",
//         type: "string",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//       {
//         internalType: "address",
//         name: "assignedFreelancer",
//         type: "address",
//       },
//       {
//         internalType: "bool",
//         name: "isCompleted",
//         type: "bool",
//       },
//       {
//         internalType: "bool",
//         name: "isPaidOut",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "token",
//     outputs: [
//       {
//         internalType: "contract IERC20",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];

// const Register = () => {
//   // Connect to Ethereum provider (MetaMask)

//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();
//   const contract = new ethers.Contract(contractAddress, contractABI, signer);

//   //  function to register a new freelancer
//   async function registerFreelancer(name) {
//     const contract = await getContract();
//     const tx = await contract.registerFreelancer(name);
//     await tx.wait();
//     console.log("Freelancer registered!");
//   }

//   async function connectWallet() {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         console.log("Connected account:", accounts[0]);
//         return accounts[0];
//       } catch (error) {
//         console.error("User denied account access:", error);
//       }
//     } else {
//       console.error("MetaMask not installed");
//     }
//   }

//   return (
//     <div className="h-screen flex flex-col">
//       <div className="border border-2 rounded-md p-6 flex ">
//         <button
//           onClick={connectWallet}
//           className="bg-blue-500 text-white p-4 rounded-md cursor-pointer"
//         >
//           Connect Wallet
//         </button>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "./contractDetails/contractABI.json";
import ConnectWallet from "./ConnectWallet";
import AddFreelancer from "./AddFreelancer";
import PostJob from "./PostJob";
import ApproveMilestone from "./ApproveMilestone";
import CompleteJob from "./CompleteJob";
// import contractABI from "./contractDetails/contractABI";

const contractAddress =
  "0xe553100b4178d81f78f074dbf9ba3797db80b07e734f6658f4bfb81679d57b44";

function Register() {
  const [signer, setSigner] = useState(null);
  const contract = signer
    ? new ethers.Contract(contractAddress, contractABI, signer)
    : null;

  return (
    <div className="p-6">
      <ConnectWallet setSigner={setSigner} />
      <AddFreelancer contract={contract} signer={signer} />
      <PostJob contract={contract} />
      <ApproveMilestone contract={contract} />
      <CompleteJob contract={contract} />
    </div>
  );
}

export default Register;
