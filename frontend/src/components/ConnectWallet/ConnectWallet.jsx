import React, { useState } from "react";
import onboard from "./connectWallet.js";
import wallet from "../../assets/wallet.png";
import { useNavigate } from "react-router-dom";

const wallet_icon = wallet;

const WalletConnect = () => {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState(null);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState("");

  // const connectWallet = async () => {
  //   const wallets = await onboard.connectWallet();
  //   if (wallets.length > 0) {
  //     setWallet(wallets[0]);
  //     setAccount(wallets[0].accounts[0].address);
  //   }

  //   if (!account) {
  //     console.log("Please connect wallet to continue");
  //   }

  //   localStorage.setItem("account", account);
  //   navigate("/Persona", { state: { account } });

  //   console.log("Account Registered successfully");
  // };

  // const connectWallet = async () => {
  //   const wallets = await onboard.connectWallet();

  //   if (wallets.length > 0) {
  //     const connectedWallet = wallets[0];
  //     const userAccount = connectedWallet.accounts[0]?.address;

  //     if (userAccount) {
  //       setWallet(connectedWallet);
  //       setAccount(userAccount);
  //       localStorage.setItem("account", userAccount);
  //       console.log("Account Registered successfully");
  //       console.log(userAccount);

  //       // Navigate only when an account is available
  //       navigate("/Persona", { state: { account: userAccount } });
  //     }
  //   } else {
  //     console.log("Please connect wallet to continue");
  //   }
  // };

  const connectWallet = async () => {
    try {
      const wallets = await onboard.connectWallet();
      if (wallets.length > 0) {
        const connectedWallet = wallets[0];
        const userAccount = connectedWallet.accounts[0]?.address;

        if (userAccount) {
          setWallet(connectedWallet);
          setAccount(userAccount);
          localStorage.setItem("account", userAccount);
          console.log("Account Registered successfully");

          // Navigate only when an account is available

          navigate("/Persona", { state: { account: userAccount } });
          return { success: true, account: userAccount };
        }
      }
      throw new Error("Please connect wallet to continue");
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const disconnectWallet = async () => {
    await onboard.disconnectWallet({ label: wallet.label });
    setWallet(null);
    setAccount(null);
  };

  return (
    <div>
      <button
        onClick={connectWallet}
        className="flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA] "
      >
        <img src={wallet_icon} alt="wallet logo" />
        <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
          Wallet connect
        </span>
      </button>
    </div>
  );
};

export default WalletConnect;
