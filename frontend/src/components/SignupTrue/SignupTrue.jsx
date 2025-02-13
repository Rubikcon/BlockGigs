import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from '../../assets/3dcube.png';
import { GoEye, GoEyeClosed } from "react-icons/go";

const SignupTrue = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirming password visibility
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if password is at least 8 characters
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
            return;
        } else {
            setPasswordError("");
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords don't match.");
            return;
        } else {
            setConfirmPasswordError("");
        }

        // If everything is valid, navigate to the next page which is SigninTrue page
        navigate('/SigninTrue');
    };

    return (
        <div className='w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat items-center'>
            <div className='w-[103px] h-[37px] flex justify-between items-center gap-2 ml-4'>
                <img src={logo} alt="Blockgigs logo" className='mt-4' />
                <h1 className='font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo mt-4'>Blockgigs</h1>
            </div>

            <div className="flex items-center justify-center mt-[6rem]">
                <form className="w-[300px] h-[400px] lg:w-[422px] lg:h-[485px] rounded-xl bg-[#ffffff] flex flex-col items-center" onSubmit={handleSubmit}>
                    <div className='w-[350px] h-[64px] gap-2 flex flex-col items-center mt-[1rem] lg:mt-[3rem]'>
                        <h2 className='font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]'>Sign Up</h2>
                        <p className='font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]'>Set your Password to Continue</p>
                    </div>

                    <div className='w-[250px] lg:w-[350px] gap-1 flex flex-col items-start mt-[1rem] lg:mt-[2rem]'>
                        <label className='font-montserrat font-medium text-[14px] leading-6 text-[#292929]' htmlFor="password">Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? "text" : "password"} // Toggle between text and password input type
                                id="password"
                                className='w-[250px] lg:w-[350px] h-[47px] rounded-[8px] border border-[#DBDBDB] text-[#000] text-[14px] font-medium leading-6 font-montserrat outline-[#dbdbdb]'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter password'
                            />
                            {showPassword ? (
                                <GoEyeClosed className='absolute right-2.5 top-1/2 transform -translate-y-1/2 text-[#292d32]' onClick={() => setShowPassword(!showPassword)} />
                            ) : (
                                <GoEye className='absolute right-2.5 top-1/2 transform -translate-y-1/2 text-[#292d32]' onClick={() => setShowPassword(!showPassword)} />
                            )}
                        </div>
                        {passwordError && <span className="text-red-500">{passwordError}</span>}
                    </div>

                    <div className='w-[250px] lg:w-[350px] gap-1 flex flex-col items-start mt-[1rem] lg:mt-[2rem]'>
                        <label className='font-montserrat font-medium text-[14px] leading-6 text-[#292929]' htmlFor="confirmPassword">Confirm Password</label>
                        <div className='relative'>
                            <input
                                type={showConfirmPassword ? "text" : "password"} // Toggle between text and password input type
                                id="confirmPassword"
                                className='w-[250px] lg:w-[350px] h-[47px] rounded-[8px] border border-[#DBDBDB] text-[#000] text-[14px] font-medium leading-6 font-montserrat outline-[#dbdbdb]'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder='Retype password'
                            />
                            {showConfirmPassword ? (
                                <GoEyeClosed className='absolute right-2.5 top-1/2 transform -translate-y-1/2 text-[#292d32]' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                            ) : (
                                <GoEye className='absolute right-2.5 top-1/2 transform -translate-y-1/2 text-[#292d32]' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                            )}
                        </div>
                        {confirmPasswordError && <span className="text-red-500">{confirmPasswordError}</span>}
                    </div>

                    <button
                        type="submit"
                        className='w-[220px] lg:w-[350px] h-[48px] rounded-[8px] bg-[#2F66F6] font-montserrat font-medium text-base leading-6 text-white cursor-pointer mt-[1rem] lg:mt-[2rem]'
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupTrue;
