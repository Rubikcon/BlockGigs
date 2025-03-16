import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import logo from "../../assets/3dcube.png";
import { FaArrowRightLong } from "react-icons/fa6";
import metamask from "../../assets/metamask.png";
// import celo from "../../assets/celo.png";
// import wallet from "../../assets/wallet.png";
import { Link } from "react-router-dom";
import { BrowserProvider, Contract } from "ethers";

// import ConnectWallet from "../ConnectWallet/ConnectWallet";

// Import the connectButton from the tsconfiguration
import { ConnectButton } from "@rainbow-me/rainbowkit";

import CONTRACT_ABI from "../../config/contractABI.json";
const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

const Password = () => {
  const [password, setPassword] = useState("");
  const [addr, setAddr] = useState("");
  const [balance, setBalance] = useState("");
  const [signature, setSignature] = useState("");
  const [signer, setSigner] = useState(null);
  const [roles, setRoles] = useState("talent");
  const [loading, setLoading] = useState(false);
  //   const [walletAccount, setWalletAccount] = useState(null);
  //   const [walletError, setWalletError] = useState(null);

  const handleSuccess = (account) => {
    setWalletAccount(account);

    console.log("Wallet connected:", account);
  };

  const handleError = (error) => {
    setWalletError(error);

    console.log("Wallet connection failed:", error);
  };

  // Add loading state to UI
  useEffect(() => {
    if (loading) {
      // You can add a loading spinner here
      document.body.style.cursor = "wait";
    } else {
      document.body.style.cursor = "default";
    }
  }, [loading]);

  const navigate = useNavigate(); //for page navigation

  const handleSubmit = (e) => {
    // console.log(CONTRACT_ABI);
    e.preventDefault(); //This will stop the form from submitting to itself

    //Checking if the email field is empty
    if (!password) {
      alert("Enter password to continue!");
      return;
    }

    localStorage.setItem("password", password);
    // email = localStorage.getItem("email");

    //If email is valid, form can be sumbitted
    alert("Form submitted successfully!");

    // Navigate to verification page and pass the email as state
    navigate("/Persona", { state: { password } });
  };

  const handleGotoHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat items-center ">
      <div
        onClick={handleGotoHome}
        className="w-[103px] h-[37px] cursor-pointer flex justify-between items-center gap-2 ml-4 "
      >
        <img src={logo} alt="Blockgigs logo" className="mt-4" />
        <h1 className="font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo mt-4">
          Blockgigs
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="w-[320px] h-[550px] lg:w-[422px] lg:h-[615px] rounded-xl bg-[#ffffff] flex flex-col items-center">
          {/* -------------------- EMAIL FORM -------------------------- */}
          <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col items-center "
          >
            <div className="w-[350px] h-[64px] gap-2 flex flex-col items-center mt-[7rem] lg:mt-[8rem] ">
              <h2 className="font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]">
                Continue Sign Up
              </h2>
              <p className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]">
                Please enter you password to complete signup``
              </p>
            </div>

            <div className="w-[260px] lg:w-[350px] h-[103px] gap-1 flex flex-col items-start mt-[1.4rem]">
              <label
                htmlFor="password"
                className="font-montserrat font-medium text-[14px] leading-6 text-[#292929]"
              >
                Password
              </label>
              <div className="relative flex items-center mt-[-1.8rem]">
                <input
                  type="password"
                  placeholder="Enter Password"
                  // required
                  aria-required="true"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[260px] lg:w-[350px] h-[47px] mt-[28px] px-[16px] py-[12px] gap-[16px] rounded-[6px] border-[1px]  border-[#DBDBDB] text-[14px] font-montserrat font-normal leading-[23px] text-[#a9a9a9]"
                />

                <button
                  type="submit"
                  className="absolute right-0 lg:right-3  w-[36px] h-[33.33px] top-[35px] left-[220px] lg:left-[306px] rounded-[6.67px] p-[10px] gap-2.5 bg-[#2f66f6] cursor-pointer"
                >
                  {" "}
                  <FaArrowRightLong className="text-[#fafafa] pointer-events-none " />{" "}
                </button>
              </div>

              {/* <div className="flex justify-center items-center w-[320px] lg:w-[340px] h-[24px] gap-1 ml-[-2rem] lg:ml-[-1rem]">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="mt-[0.3rem]"
                  defaultChecked={true}
                  required
                  aria-required="true"
                />
                <p className="font-montserrat font-medium text-[10px] lg:text-[12px] leading-6 text-[#292929]">
                  Agree to our{" "}
                  <span className="font-montserrat font-medium text-[10px] lg:text-[12px] leading-6 text-[#2f66f6]">
                    Terms and Condition
                  </span>{" "}
                  and{" "}
                  <span className="font-montserrat font-medium text-[10px] lg:text-[12px] leading-6 text-[#2f66f6]">
                    Privacy Policy
                  </span>
                </p>
              </div> */}
            </div>
          </form>{" "}
          <div className="flex justify-center items-center w-[260px] lg:w-[350px] h-[24px] gap-3 mt-[1.5rem]">
            <span className="flex-grow border-t text-[#e6e6e6]"></span>
            <p className="mx-4 font-onset text-[#888888] font-normal text-[14px] leading-6">
              OR
            </p>
            <span className="flex-grow border-t text-[#e6e6e6]"></span>
          </div>
          {/* <div className="w-[350px] h-[64px] gap-2 flex flex-col items-center mt-[1rem] lg:mt-[3rem] ">
            <h2 className="font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]">
              Sign Up
            </h2>
            <p className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]">
              Create an account with us by connecting your wallet
            </p>
          </div> */}
          {/* Fix this */}
          {/* {walletError && (
            <div className="text-red-500 text-sm mt-2 text-center">
              {walletError}
            </div>
          )} */}
          {/* {walletError && <p className="text-red-800">Error: {walletError}</p>} */}
          <div className="w-[273px] h-[24px] gap-1 flex justify-center items-center mt-8">
            <p className="font-montserrat font-medium text-[14px] lg:text-base leading-6 text-[#292929]">
              Already have an account?
            </p>
            <Link
              to="/signin"
              className="font-montserrat font-medium text-[14px] lg:text-base leading-6 text-[#2f66f6] cursor-pointer"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
