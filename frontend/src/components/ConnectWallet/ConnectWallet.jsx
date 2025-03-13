import React, { useState } from "react";
import onboard from "./connectWallet.js";
import wallet from "../../assets/wallet.png";
import { useNavigate } from "react-router-dom";

const wallet_icon = wallet;

const WalletConnect = () => {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState(null);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    const wallets = await onboard.connectWallet();
    if (wallets.length > 0) {
      setWallet(wallets[0]);
      setAccount(wallets[0].accounts[0].address);
    }
    localStorage.setItem("account", account);
    navigate("/Persona", { state: { account } });

    console.log("Account Registered successfully");
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
