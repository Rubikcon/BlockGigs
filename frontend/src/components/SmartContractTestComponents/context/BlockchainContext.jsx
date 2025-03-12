// import { createContext, useEffect, useState } from "react";
// import { ethers } from "ethers";
// import { contractAddress, contractABI } from "../utils/constants";

// export const BlockchainContext = createContext();

// export const BlockchainProvider = ({ children }) => {
//   const [currentAccount, setCurrentAccount] = useState(null);
//   const [contract, setContract] = useState(null);

//   useEffect(() => {
//     const connectToBlockchain = async () => {
//       if (!window.ethereum) return alert("Please install MetaMask!");

//       {

//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const contractInstance = new ethers.Contract(
//         contractAddress,
//         contractABI,
//         signer
//       );

//       setContract(contractInstance);

//       //
//     };

//     connectToBlockchain();
//   }, []);

//   return (
//     <BlockchainContext.Provider
//       value={{ currentAccount, setCurrentAccount, contract }}
//     >
//       {children}
//     </BlockchainContext.Provider>
//   );
// };

import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAddress, contractABI } from "../utils/constants";

export const BlockchainContext = createContext();

export const BlockchainProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const connectToBlockchain = async () => {
      if (!window.ethereum) return alert("Please install MetaMask!");

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        setContract(contractInstance);

        // Check if the user is already connected
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);
        }

        // Listen for account changes
        window.ethereum.on("accountsChanged", (newAccounts) => {
          if (newAccounts.length > 0) {
            setCurrentAccount(newAccounts[0]);
          } else {
            setCurrentAccount(null);
          }
        });
      } catch (error) {
        console.error("Error connecting to blockchain:", error);
      }
    };

    connectToBlockchain();
  }, []);

  return (
    <BlockchainContext.Provider
      value={{ currentAccount, setCurrentAccount, contract }}
    >
      {children}
    </BlockchainContext.Provider>
  );
};
