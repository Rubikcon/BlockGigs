import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/3dcube.png';

const EmailCode = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';

  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [loading, setLoading] = useState(false);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Allow only digits in the input tag
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    if (newOtp.every((digit) => digit !== '')) {
      setLoading(true);
      setTimeout(() => {
        navigate('/SignupTrue');
      }, 2000); // 2 seconds delay before the user navigates to the signuptrue page
    }
  };

  return (
    <div className='w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center'>
      <div className='w-[103px] h-[37px] flex justify-between items-center gap-2 mt-4'>
        <img src={logo} alt="Blockgigs logo" />
        <h1 className='font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo'>Blockgigs</h1>
      </div>

      <div className='flex justify-center items-center mt-[5rem] lg:mt-[10rem]'>
        <div className='w-[300px] h-[370px] lg:w-[436px] lg:h-[416px] rounded-[12px] bg-[#ffffff] flex flex-col items-center'>
          <div className='flex flex-col items-center gap-2 mt-9'>
            <h3 className='font-montserrat font-medium text-[20px] lg:text-2xl leading-8 text-[#292929]'>Enter Email Code</h3>
            <p className='font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]'>
              Enter the OTP code we just sent to your registered <br /> email address to be able to set your password
            </p>
          </div>

          <div className="w-[270px] lg:w-[364px] flex justify-between mt-[2rem] lg:mt-[4rem]">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                required aria-required="true"
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-[40px] h-[40px] lg:w-[51.29px] lg:h-[51.29px] rounded-[4.27px] border-[1.07px] border-[#CCDAD6] bg-[#FEFEFE] text-center text-[20px] font-bold focus:outline-none"
              />
            ))}
          </div>

          <div className='mt-[2rem] lg:mt-[2rem]'>
            {loading ? (
              <div className='loading-spinner w-[40px] h-[40px] border-4 border-t-[#2f66f6] border-[#ccdada] rounded-full animate-spin'></div>
            ) : (
              <p className='font-montserrat font-medium text-[12px] leading-6 text-[#303030]'>
                Code sent will expire in <span className='text-[#ff4f4f]'>10 minutes</span>
              </p>
            )}
          </div>

          <div className='mt-[2rem]'>
            <p className='font-montserrat font-medium text-[14px] lg:text-base text-[#292929]'>
              Didn’t Receive it? <a href='#' className='text-[#2f66f6]'>Resend Code</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCode;
