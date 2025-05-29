import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/3dcube.png";
import axios from "axios";
import { toast } from "react-hot-toast";

const ClientForm = () => {
  const navigate = useNavigate();
  const [fullname_, setFullname_] = useState("");
  const [about_, setAbout_] = useState("");
  const [errors, setErrors] = useState({});
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const { account, selectedPersona } = location.state || {};

  const handleGotoHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // Retrieve stored data from localStorage
      const userRole = localStorage.getItem("Persona") || "client";
      const userPassword = localStorage.getItem("password") || "";
      const userEmail = localStorage.getItem("email") || "";
      const userWallet_address = localStorage.getItem("userAddress") || "";
      const detectWallet =
        location.state?.detectWallet === true ||
        localStorage.getItem("detectWallet") === "true";

      const isWalletUser = !!userWallet_address;

      const payload = {
        role: userRole,

        fullname: fullname_,

        about: about_,
        ...(detectWallet
          ? {
              wallet_address: userWallet_address,

              email: "",
              password: "",
            }
          : {
              email: userEmail,

              password: userPassword,

              wallet_address: "",
            }),
      };

      const endpoint = detectWallet
        ? `${apiUrl}/api/auth/register-wallet`
        : `${apiUrl}/api/auth/register-email`;

      const response = await axios.post(endpoint, payload);

      // alert(response.data.message);
      // toast.success(response.data.message);
      toast.success("Proceed to login");
      // alert(response.data.message);
      console.log("login to continue");
      // console.log(response.data.message);

      navigate("/signin"); // Redirect after successful registration
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
      // alert(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    navigate("/client");
  };

  return (
    <div className="w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center">
      {/* Logo Section */}
      <div
        onClick={handleGotoHome}
        className="w-[103px] h-[37px] flex justify-between items-center gap-2 mt-4 ml-4 cursor-pointer"
      >
        <img src={logo} alt="Blockgigs logo" className="mt-4" />
        <h1 className="font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo mt-4">
          Blockgigs
        </h1>
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center mt-[4rem]">
        <form
          onSubmit={handleSubmit}
          className="w-[300px] h-auto lg:w-[422px] lg:h-auto rounded-xl bg-white shadow-lg flex flex-col items-center p-6"
          aria-labelledby="form-title"
        >
          <div className="w-[350px] flex flex-col items-center mt-[1rem] lg:mt-[3rem] text-center">
            <h2
              id="form-title"
              className="font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]"
            >
              Profile Information
            </h2>
            <p className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]">
              Client, Please fill out your information
            </p>
          </div>

          <div className="w-full flex flex-col items-center mt-[2rem] gap-5">
            {/* Full Name Input */}
            <div className="w-[260px] lg:w-[350px] h-[70px] flex flex-col items-start">
              <label
                htmlFor="fullname"
                className="font-montserrat font-medium text-[14px] leading-6 text-[#292929]"
              >
                Full name <span className="text-red-600">*</span>
              </label>
              <input
                className={`w-full h-[42px] rounded-[8px] border-[1px] px-3 outline-none font-montserrat text-[14px] leading-6 text-[#000] ${
                  errors.name ? "border-red-500" : "border-[#dbdbdb]"
                }`}
                type="text"
                id="fullname"
                name="fullname"
                value={fullname_}
                onChange={(e) => setFullname_(e.target.value)}
                required
                aria-required="true"
                aria-describedby="name-error"
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="text-red-600 text-sm mt-1"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Work/Business Description */}
            <div className="w-[260px] lg:w-[350px] h-auto flex flex-col items-start">
              <label
                htmlFor="about"
                className="font-montserrat font-medium text-[14px] leading-6 text-[#292929]"
              >
                About you & what you do <span className="text-red-600">*</span>
              </label>

              <textarea
                id="about"
                name="about"
                value={about_}
                onChange={(e) => setAbout_(e.target.value)}
                placeholder="Business or individual looking to hire..."
                className={`w-full h-[100px] rounded-[8px] border px-3 py-2 outline-none resize-none font-montserrat text-[14px] leading-6 text-[#000] ${
                  errors.work ? "border-red-500" : "border-[#dbdbdb]"
                }`}
                aria-required="true"
                aria-describedby="work-error"
              />
              {errors.work && (
                <p
                  id="about-error"
                  className="text-red-600 text-sm mt-1"
                  role="alert"
                >
                  {errors.work}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          {/* <button
            type="submit"
            className="w-[260px] lg:w-[350px] h-[48px] cursor-pointer mt-[2rem] lg:mt-[3rem] rounded-[8px] bg-[#2F66F6] text-white font-montserrat text-[14px] lg:text-base leading-6 focus:ring-2 focus:ring-blue-400"
          >
            Profile Done!
          </button> */}

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-full my-5 h-12 cursor-pointer rounded-lg bg-blue-600 text-white font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="animate-spin rounded-full border-2 border-white border-t-transparent h-5 w-5"></span>
                Loading...
              </>
            ) : (
              "Profile Done!"
            )}
          </button>

          {/* Skip Button */}
          {/* <button
            type="button"
            className="font-montserrat font-medium text-[14px] lg:text-base leading-6 text-[#2f66f6] cursor-pointer mt-[1rem] underline focus:ring-2 focus:ring-blue-400"
            onClick={handleSkip}
            aria-label="Skip this form and fill later"
          >
            Skip Profile, I will fill later
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
