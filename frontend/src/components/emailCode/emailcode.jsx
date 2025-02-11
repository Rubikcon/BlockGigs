import React from 'react';
import { useLocation } from 'react-router-dom'; // To access the email passed from Signup page
import logo from '../../assets/3dcube.png';

const EmailCode = () => {
  const location = useLocation(); 
  const email = location.state?.email || ''; // Access the email passed from the signup page

  return (
    <div className='w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat items-center'>
      <div className='w-[103px] h-[37px] flex justify-between items-center gap-2 ml-4'>
        <img src={logo} alt="Blockgigs logo" className='mt-4' />
        <h1 className='font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo mt-4'>Blockgigs</h1>
      </div>

      {/*<div className="flex items-center justify-center h-full">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] lg:w-[400px] text-center">
          <h2 className="text-xl font-semibold mb-4">Verification Code</h2>
          <p className="text-gray-600">A verification code has been sent to <strong>{email}</strong>.</p>
          <input
            type="text"
            placeholder="Enter your code"
            className="mt-4 p-2 border rounded w-full"
          />
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Verify</button>
        </div>
      </div>*/}

        <div className='flex justify-center items-center mt-[10rem]'>
        <div className='w-[436px] h[416px] top-[304px] left-[502px] rounded-[12px] bg-[#ffffff] flex flex-col items-center'>
          <div className='flex flex-col items-center w-[364px] h-[88px] top-[36px] left-[36px] gap-2 mt-9'>
            <h3 className='font-montserrat font-medium text-2xl leading-8 text-[#292929]'>Enter Email Code</h3>
            <p className='font-montserrat font-medium text-[14px] leading-6 text-[#676767]'>Enter the OTP code we just sent to your registered <br /> email address to be able to set your password</p>
          </div>

       
          <div className="w-[364px] h-[51px] mt-[4rem] mx-auto flex justify-between items-center">
            <input 
              type="text" 
              maxLength="1" 
              className="w-[51.29px] h-[51.29px] rounded-[4.27px] border-[1.07px] border-[#CCDAD6] bg-[#FEFEFE] text-center text-[20px] font-bold focus:outline-none" 
            />

          <input 
          type="text" 
          maxLength="1" 
          className="w-[51.29px] h-[51.29px] rounded-[4.27px] border-[1.07px] border-[#CCDAD6] bg-[#FEFEFE] text-center text-[20px] font-bold focus:outline-none" 
         />

        <input 
         type="text" 
         maxLength="1" 
         className="w-[51.29px] h-[51.29px] rounded-[4.27px] border-[1.07px] border-[#CCDAD6] bg-[#FEFEFE] text-center text-[20px] font-bold focus:outline-none" 
        />

       <input 
       type="text" 
       maxLength="1" 
       className="w-[51.29px] h-[51.29px] rounded-[4.27px] border-[1.07px] border-[#CCDAD6] bg-[#FEFEFE] text-center text-[20px] font-bold focus:outline-none" 
       />

      <input 
      type="text" 
      maxLength="1" 
      className="w-[51.29px] h-[51.29px] rounded-[4.27px] border-[1.07px] border-[#CCDAD6] bg-[#FEFEFE] text-center text-[20px] font-bold focus:outline-none" 
     />

     <input 
     type="text" 
     maxLength="1" 
     className="w-[51.29px] h-[51.29px] rounded-[4.27px] border-[1.07px] border-[#CCDAD6] bg-[#FEFEFE] text-center text-[20px] font-bold focus:outline-none" 
    />
    </div>


          <div className='w-[364px] h-[24px] gap-1 mx-auto flex justify-center items-center mt-[2rem]'>
            <p className='font-montserrat font-medium text-[12px] leading-6 text-[#303030]'>Code sent will expire in <span className='font-montserrat font-medium text-[12px] leading-6 text-[#ff4f4f]'>10 minutes</span> </p>
          </div>

          <div className='w-[256px] h-[24px] top-[354px] left-[90px] gap-1 mt-[3rem] mb-[2rem]'>
            <p className='font-montserrat font-medium text-base leading-6 text-[#292929]'>Didn’t Receive it? <a href='#' className='font-montserrat font-medium text-base leading-6 text-[#2f66f6]'>Resend Code</a></p>
          </div>
      </div>
        </div>
    
    </div>
  );
};

export default EmailCode;
