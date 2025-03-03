import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/3dcube.png";
import { FaArrowRightLong } from "react-icons/fa6";
import metamask from "../../assets/metamask.png";
import celo from "../../assets/celo.png";
import wallet from "../../assets/wallet.png";
import { Link } from "react-router-dom";

const signin = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // page navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // This will stop the form from submitting to itself

    // Checking if the email field is empty
    if (!email) {
      alert("Email address cannot be empty!");
      return;
    }

    // Checking if the email address is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please put a valid email address!");
      return;
    }

    // If email is valid, form can be submitted
    alert("Form submitted successfully!");

    // If everything is valid, navigate to the next page which is SigninTrue page
    navigate("/Persona");
  };

  return (
    <div className="w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat items-center">
      <div className="w-[103px] h-[37px] flex justify-between items-center gap-2 ml-4 ">
        <img src={logo} alt="Blockgigs logo" className="mt-4" />
        <h1 className="font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo mt-4">
          Blockgigs
        </h1>
      </div>

      <div className="flex items-center justify-center mt-[4rem]">
        <form
          onSubmit={handleSubmit}
          className="w-[300px] h-[550px] lg:w-[422px] lg:h-[615px] rounded-xl bg-[#ffffff] flex flex-col items-center"
        >
          <div className="w-[350px] h-[64px] gap-2 flex flex-col items-center mt-[1rem] lg:mt-[3rem]">
            <h2 className="font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]">
              Sign In
            </h2>
            <p className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]">
              Welcome Back to Blockgigs!
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
                required
                aria-required="true"
                onChange={(e) => setEmail(e.target.value)}
                className="w-[260px] lg:w-[350px] h-[47px] mt-[28px] px-[16px] py-[12px] gap-[16px] rounded-[6px] border-[1px] border-[#DBDBDB] text-[14px] font-montserrat font-normal leading-[23px] text-[#a9a9a9]"
              />
              <button
                type="submit"
                className="absolute right-0 lg:right-3 w-[36px] h-[33.33px] top-[35px] left-[220px] lg:left-[306px] rounded-[6.67px] p-[10px] gap-2.5 bg-[#2f66f6] cursor-pointer"
              >
                <FaArrowRightLong className="text-[#fafafa] pointer-events-none " />
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

          <div className="flex justify-center items-center w-[260px] lg:w-[350px] h-[24px] gap-3 mt-[1.5rem]">
            <span className="flex-grow border-t text-[#e6e6e6]"></span>
            <p className="mx-4 font-onset text-[#888888] font-normal text-[14px] leading-6">
              OR
            </p>
            <span className="flex-grow border-t text-[#e6e6e6]"></span>
          </div>

          <div className="flex flex-col items-center gap-3 w-[300px] lg:w-[350px] h-[192px] mt-4">
            <button className="flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA]">
              <img src={metamask} alt="metamask logo" />
              <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
                Metamask
              </span>
            </button>
            <button className="flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA] ">
              <img src={celo} alt="celo logo" />
              <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
                Celo
              </span>
            </button>
            <button className="flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA] ">
              <img src={wallet} alt="wallet logo" />
              <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
                Wallet connect
              </span>
            </button>
          </div>

          <div className="w-[273px] h-[24px] gap-1 flex justify-center items-center mt-8">
            <p className="font-montserrat font-medium text-[14px] lg:text-base leading-6 text-[#292929]">
              Don't have an account?
            </p>
            <Link
              to="/signup"
              className="font-montserrat font-medium text-[14px] lg:text-base leading-6 text-[#2f66f6] cursor-pointer"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signin;
