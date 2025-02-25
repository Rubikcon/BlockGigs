import { useState, useEffect } from "react";
import { ethers } from "ethers";

const ConnectWallet = ({ setSigner }) => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        setSigner(signer);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask not installed!");
    }
  };

  return (
    <div className="p-4 text-center">
      {account ? (
        <p className="text-green-600 font-bold">Connected: {account}</p>
      ) : (
        <button onClick={connectWallet} className="bg-blue-500 text-white p-2 rounded">
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
