import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import logo from "../../assets/3dcube.png";
import { FaArrowRightLong } from "react-icons/fa6";
import metamask from "../../assets/metamask.png";
import celo from "../../assets/celo.png";
import wallet from "../../assets/wallet.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addr, setAddr] = useState("");
  const [balance, setBalance] = useState("");
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signature, setSignature] = useState("");

  const navigate = useNavigate(); //for page navigation
  ``;

  const handleGotoHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError("");

    if (!email) {
      alert("Enter email address to continue!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    setError(""); // Clear previous errors

    const loginData = { email, password };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        loginData
      );
      console.log("Response Data:", response.data);
      // Debugging
      const { token, user } = response.data;
      if (!user || !user.role) {
        setError("Role not found. Please contact support.");

        return;
      }

      // Store token & role

      localStorage.setItem("token", token);

      localStorage.setItem("userRole", user.role);

      // Redirect based on role

      const roleRoutes = {
        client: "/client/dashboard",
        talent: "/talent/dashboard",
        admin: "/admin/dashboard",
      };

      navigate(roleRoutes[user.role] || "/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // const connectMetamask = async () => {
  //   let account;
  //   // let balance;
  //   ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
  //     account = accounts[0];
  //     console.log("Address", account);
  //     setAddr(account);

  //     ethereum
  //       .request({
  //         method: "eth_getBalance",
  //         params: [account, "latest"],
  //       })
  //       .then((result) => {
  //         console.log(result);
  //         let wei = parseInt(result, 16);
  //         let bal = wei / 10 ** 18;
  //         setBalance(bal);

  //         console.log("balance:", bal);
  //         navigate("");
  //       });

  //     // Store address in localStorage (or sessionStorage)
  //     localStorage.setItem("walletAddress", account);
  //     // sessionStorage.setItem("walletAddress", account); // Use sessionStorage if you prefer
  //     // });

  //     // Uncomment this to sign message

  //     // Signin and sign in message
  //     const message = "Sign this message to verify your wallet.";

  //     ethereum
  //       .request({
  //         method: "personal_sign",
  //         params: [message, account],
  //       })
  //       .then((signa) => {
  //         // console.log(result);
  //         // let signature;
  //         // let bal = wei / 10 ** 18;
  //         setSignature(signa);
  //         setSignature(signa);
  //         console.log("signature", signa);
  //         // console.log("balance:", bal);
  //         navigate(`{/talent/dashboard}`);
  //       });

  //     // console.log("Signature:", signature);

  //     // sessionStorage.setItem("walletAddress", account);

  //     sessionStorage.setItem("walletSignature", signature);
  //   });
  //   const networkId = await ethereum.request({ method: "net_version" });
  //   console.log("Network ID:", networkId);
  // };

  // const connectMetamask = async () => {
  //   let account;

  //   ethereum
  //     .request({ method: "eth_requestAccounts" })
  //     .then(async (accounts) => {
  //       account = accounts[0];
  //       console.log("Address", account);
  //       setAddr(account);

  //       ethereum
  //         .request({
  //           method: "eth_getBalance",
  //           params: [account, "latest"],
  //         })
  //         .then((result) => {
  //           let wei = parseInt(result, 16);
  //           let bal = wei / 10 ** 18;
  //           setBalance(bal);
  //           console.log("balance:", bal);
  //         });

  //       // Store wallet address
  //       localStorage.setItem("walletAddress", account);

  //       // Sign message
  //       const message = "Sign this message to verify your wallet.";
  //       ethereum
  //         .request({
  //           method: "personal_sign",
  //           params: [message, account],
  //         })
  //         .then(async (signa) => {
  //           setSignature(signa);
  //           console.log("signature", signa);

  //           try {
  //             const response = await axios.post(
  //               "http://localhost:4000/api/auth/wallet-login",
  //               { wallet_address: account }
  //             );

  //             console.log("Response Data:", response.data);

  //             const { token, user } = response.data;
  //             if (!user || !user.role) {
  //               setError("Role not found. Please contact support.");
  //               return;
  //             }

  //             // Store token & role
  //             localStorage.setItem("token", token);
  //             localStorage.setItem("userRole", user.role);

  //             // Redirect based on role
  //             const roleRoutes = {
  //               client: "/client/dashboard",
  //               talent: "/talent/dashboard",
  //               admin: "/admin/dashboard",
  //             };

  //             navigate(roleRoutes[user.role] || "/");
  //           } catch (err) {
  //             setError(err.response?.data?.message || "Wallet login failed");
  //           }
  //         });

  //       sessionStorage.setItem("walletSignature", signature);
  //     });

  //   const networkId = await ethereum.request({ method: "net_version" });
  //   console.log("Network ID:", networkId);
  // };

  // const connectMetamask = async () => {
  //   try {
  //     // Request wallet connection
  //     const accounts = await ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     const walletAddress = accounts[0]; // Get wallet address
  //     console.log("Wallet Address:", walletAddress);

  //     setAddr(walletAddress);
  //     localStorage.setItem("walletAddress", walletAddress); // Store wallet address

  //     // Sign message for authentication (optional, depending on API requirements)
  //     const message = "Sign this message to verify your wallet.";
  //     const signature = await ethereum.request({
  //       method: "personal_sign",
  //       params: [message, walletAddress],
  //     });

  //     setSignature(signature);
  //     console.log("Signature:", signature);

  //     // API Call to login using wallet address
  //     const response = await axios.post(
  //       "http://localhost:4000/api/auth/login",
  //       { wallet_address: walletAddress }
  //     );

  //     console.log("Response Data:", response.data);

  //     const { token, user } = response.data;

  //     // Ensure role exists
  //     if (!user || !user.role) {
  //       setError("Role not found. Please contact support.");
  //       return;
  //     }

  //     // Store token & role
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("userRole", user.role);

  //     // Redirect user based on role
  //     const roleRoutes = {
  //       client: "/client/dashboard",
  //       talent: "/talent/dashboard",
  //       admin: "/admin/dashboard",
  //     };

  //     navigate(roleRoutes[user.role] || "/");
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Wallet login failed");
  //   }
  // };

  const connectMetamask = async () => {
    try {
      if (!window.ethereum) {
        alert("Metamask not detected. Please install Metamask.");
        return;
      }

      // Request wallet connection
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const walletAddress = accounts[0]; // Get wallet address
      console.log("Wallet Address:", walletAddress);
      const stringified_address = `"${walletAddress}"`;
      console.log(stringified_address);

      localStorage.setItem("walletAddress", walletAddress); // Store wallet address

      // Sign message for authentication (optional)
      // const message = "Sign this message to verify your wallet.";
      // const signature = await window.ethereum.request({
      //   method: "personal_sign",
      //   params: [message, walletAddress],
      // });

      // console.log("Signature:", signature);

      // API Call to login using wallet address

      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          wallet_address: stringified_address,
        },
        // Send wallet address as payload

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response Data:", response.data);

      const { token, user } = response.data;

      // Ensure role exists
      if (!user || !user.role) {
        setError("Role not found. Please contact support.");
        return;
      }

      // Store token & role
      localStorage.setItem("token", token);
      localStorage.setItem("userRole", user.role);

      // Redirect user based on role
      const roleRoutes = {
        client: "/client/dashboard",
        talent: "/talent/dashboard",
        admin: "/admin/dashboard",
      };

      navigate(roleRoutes[user.role] || "/");
    } catch (err) {
      console.error("Wallet login error:", err);
      setError(err.response?.data?.message || "Wallet login failed");
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
                Sign In
              </h2>
              <p className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]">
                Log in to your account with your email
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

                {/* <button
                  type="submit"
                  className="absolute right-0 lg:right-3  w-[36px] h-[33.33px] top-[35px] left-[220px] lg:left-[306px] rounded-[6.67px] p-[10px] gap-2.5 bg-[#2f66f6] cursor-pointer"
                >
                  {" "}
                  <FaArrowRightLong className="text-[#fafafa] pointer-events-none " />{" "}
                </button> */}
              </div>

              <label
                htmlFor="password"
                className="font-montserrat font-medium text-[14px] leading-6 text-[#292929]"
              >
                Password
              </label>
              <div className="relative flex items-center mt-[-1.8rem]">
                <input
                  type="password"
                  placeholder="Enter password"
                  required
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

              <div className="flex justify-center items-center w-[320px] lg:w-[340px] h-[24px] gap-1 ml-[-2rem] lg:ml-[-1rem]">
                {/* <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="mt-[0.3rem]"
                  defaultChecked={true}
                  required
                  aria-required="true"
                /> */}
                {/* <p className="font-montserrat font-medium text-[10px] lg:text-[12px] leading-6 text-[#292929]">
                  Agree to our{" "}
                  <span className="font-montserrat font-medium text-[10px] lg:text-[12px] leading-6 text-[#2f66f6]">
                    Terms and Condition
                  </span>{" "}
                  and{" "}
                  <span className="font-montserrat font-medium text-[10px] lg:text-[12px] leading-6 text-[#2f66f6]">
                    Privacy Policy
                  </span>
                </p> */}
              </div>
            </div>
          </form>

          <div className="flex justify-center items-center w-[260px] lg:w-[350px] h-[24px] gap-2 mt-[5rem]">
            <span className="flex-grow border-t text-[#e6e6e6]"></span>
            <p className="mx-4 font-onset text-[#888888] font-normal text-[14px] leading-6">
              OR
            </p>
            <span className="flex-grow border-t text-[#e6e6e6]"></span>
          </div>

          <div className="flex flex-col items-center gap-3 w-[300px] lg:w-[350px] h-[192px] mt-4">
            <button
              onClick={connectMetamask}
              className="flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA]"
            >
              <img src={metamask} alt="metamask logo" />
              <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
                Metamask
              </span>
            </button>
            <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>

            {/* <button className="flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA] ">
              <img src={celo} alt="celo logo" />
              <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
                Celo
              </span>
            </button> */}
            {/* <button className="flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA] ">
              <img src={wallet} alt="wallet logo" />
              <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
                Wallet connect
              </span>
            </button> */}
          </div>

          <div className="w-[273px] h-[24px] gap-1 flex justify-center items-center -mt-12">
            <p className="font-montserrat font-medium text-[14px] lg:text-base leading-6 text-[#292929]">
              You don't have an account?
            </p>
            <Link
              to="/signup"
              className="font-montserrat font-medium text-[14px] lg:text-base leading-6 text-[#2f66f6] cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
