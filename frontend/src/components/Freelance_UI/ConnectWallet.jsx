import { useState, useEffect } from "react";
import { BrowserProvider } from "ethers";

const ConnectWallet = ({ setSigner }) => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        setSigner(signer);

        // console.log(account);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask not installed!");
    }
  };

  useEffect(() => {
    if (account) {
      console.log("Connected account:", account);
    }
  }, [account]);
  // Runs whenever `account` changes

  return (
    <div className="p-4 text-center">
      {account ? (
        <p className="text-green-600 font-bold">Connected: {account}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white p-2 rounded cursor-pointer"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
