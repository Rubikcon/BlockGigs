import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import logo from "../../assets/3dcube.png";
import { FaArrowRightLong } from "react-icons/fa6";
import metamask from "../../assets/metamask.png";
import celo from "../../assets/celo.png";
import wallet from "../../assets/wallet.png";
import { Link } from "react-router-dom";
import { BrowserProvider, Contract } from "ethers";

const CONTRACT_ABI = "";
const CONTRACT_ADDRESS = "0xbC66956Dd11EFbB01296107A23AfA3635d192035";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [addr, setAddr] = useState("");
  const [balance, setBalance] = useState("");
  const [signature, setSignature] = useState("");
  const [signer, setSigner] = useState(null);
  const [roles, setRoles] = useState("talent");
  const navigate = useNavigate(); //for page navigation

  const handleSubmit = (e) => {
    e.preventDefault(); //This will stop the form from submitting to itself

    //Checking if the email field is empty
    if (!email) {
      alert("Enter email address to continue!");
      return;
    }

    // Take back user to the home page

    //Checking if the email address is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please put a valid email address!");
      return;
    }

    //If email is valid, form can be sumbitted
    alert("Form submitted successfully!");

    // Navigate to verification page and pass the email as state
    navigate("/emailcode", { state: { email } });
  };
  const handleGotoHome = () => {
    navigate("/");
  };

  const connectMetamask = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }

    try {
      // get the account details ready
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      // const accounts = await provider.send("eth_requestAccounts", []);
      // const account = accounts[0];

      // ✅ Request account access

      const accounts = await Promise.race([
        window.ethereum.request({ method: "eth_requestAccounts" }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timeout")), 10000)
        ),
      ]);

      console.log("Accounts:", accounts); // Debugging

      if (!accounts || accounts.length === 0) {
        alert("No account connected. Please unlock MetaMask.");
        return;
      }

      const account = accounts[0];
      console.log("Address:", account);
      setAddr(account);

      // ✅ Store wallet address in localStorage
      localStorage.setItem("walletAddress", account);

      // ✅ Get account balance
      const balanceHex = await window.ethereum.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      });

      const balance = parseInt(balanceHex, 16) / 10 ** 18;
      console.log("Balance:", balance);
      setBalance(balance);

      // ✅ Store wallet Balance in localStorage
      localStorage.setItem("walletBalance", balance);

      // Update states
      setSigner(signer);
      const contract = signer
        ? new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
        : null;

      // ✅ Sign message for authentication
      // Message to sign
      const message = `Welcome to our platform! Please sign this message to verify your wallet ownership.\n\nWallet: ${account}\nTimestamp: ${Date.now()}`;

      // Request signature
      const signature = await signer.signMessage(message);

      console.log("Signature:", signature);
      setSignature(signature);

      // ✅ Store signature in sessionStorage
      sessionStorage.setItem("walletSignature", signature);

      // ✅ Get network ID
      const networkId = await window.ethereum.request({
        method: "net_version",
      });
      console.log("Network ID:", networkId);

      // Store in localStorage
      localStorage.setItem("userAddress", account || addr);
      localStorage.setItem("walletSignature", signature);
      localStorage.setItem("signedMessage", message);
      localStorage.setItem("lastSignedAt", Date.now().toString());

      // registerUser();

      // ✅ Navigate to Persona page
      navigate("/select-role", {
        state: {
          account: account,
          signature: signature,
        },
      });
    } catch (error) {
      console.error("Error connecting MetaMask:", error);
      alert("Failed to connect MetaMask. Check console for details.");
    }
  };

  const registerUser = async (userData) => {
    // #############################################//
    // IMPORT ABI AND CONTRACT ADDRESS TO USE THIS LINE
    // ############################################//

    // get the account details ready
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    setSigner(signer);
    const contract = signer
      ? new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
      : null;
    try {
      setLoading(true);
      setError(null);

      // Get the connected wallet address
      const address = addr || (await signer.getAddress());

      // Call the smart contract's registration function
      // Adjust the parameters based on your contract's requirements
      if (roles === "client") {
        // registerClient
        const tx = await contract.registerClient({ from: address });
      } else if (roles === "talent") {
        const tx = await contract.registerFreelancer(
          userData.name,
          userData.role, // e.g., "freelancer" or "client"
          // userData.skills, // if required
          // Add other registration data as needed
          { from: address } // Specify the transaction sender)
        );
      } else {
        alert("unable to find role of user");
      }

      // Wait for the transaction to be mined
      await tx.wait();

      console.log("User registered successfully!");
      // You can add navigation or success message here
    } catch (error) {
      console.error("Registration failed:", error);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat items-center">
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
          <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col items-center "
          >
            <div className="w-[350px] h-[64px] gap-2 flex flex-col items-center mt-[1rem] lg:mt-[3rem] ">
              <h2 className="font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]">
                Sign Up
              </h2>
              <p className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]">
                Create an account with us by email or wallet
              </p>
            </div>

            <div className="w-[260px] lg:w-[350px] h-[103px] gap-1 flex flex-col items-start mt-[1.4rem]">
              <label
                htmlFor="email"
                className="font-montserrat font-medium text-[14px] leading-6 text-[#292929]"
              >
                Email Address
              </label>
              <div className="relative flex items-center mt-[-1.8rem]">
                <input
                  type="email"
                  placeholder="Continue with email"
                  // required
                  aria-required="true"
                  onChange={(e) => setEmail(e.target.value)}
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

              <div className="flex justify-center items-center w-[320px] lg:w-[340px] h-[24px] gap-1 ml-[-2rem] lg:ml-[-1rem]">
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
              </div>
            </div>
          </form>

          <div className="flex justify-center items-center w-[260px] lg:w-[350px] h-[24px] gap-3 mt-[1.5rem]">
            <span className="flex-grow border-t text-[#e6e6e6]"></span>
            <p className="mx-4 font-onset text-[#888888] font-normal text-[14px] leading-6">
              OR
            </p>
            <span className="flex-grow border-t text-[#e6e6e6]"></span>
          </div>

          <div className="flex flex-col items-center gap-3 w-[300px] lg:w-[350px] h-[192px] mt-4">
            <button
              onClick={connectMetamask}
              disabled={!signer || loading}
              className="flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA]"
            >
              <img src={metamask} alt="metamask logo" />
              <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
                Metamask
              </span>
            </button>
            {/* <button className="flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA] ">
              <img src={celo} alt="celo logo" />
              <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
                Celo
              </span>
            </button> */}
            <button className="flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA] ">
              <img src={wallet} alt="wallet logo" />
              <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
                Wallet connect
              </span>
            </button>
          </div>

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

export default Signup;
