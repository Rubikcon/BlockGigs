import { useContext } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

const ConnectWallet = () => {
  const { currentAccount, setCurrentAccount } = useContext(BlockchainContext);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask!");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(accounts[0]);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      {currentAccount ? (
        <p className="text-green-500 font-semibold">
          Connected: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}
        </p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
