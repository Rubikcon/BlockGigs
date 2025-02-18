import React, { useState } from 'react';
import logo from '../../assets/3dcube.png';



const Persona = () => {
   
    return (
        <div className='w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat items-center'>
            <div className='w-[103px] h-[37px] flex justify-between items-center gap-2 ml-4'>
                <img src={logo} alt="Blockgigs logo" className='mt-4' />
                <h1 className='font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo mt-4'>Blockgigs</h1>
            </div>

            <div className="flex items-center justify-center mt-[6rem]">
                <form className="w-[300px] h-[400px] lg:w-[422px] lg:h-[485px] rounded-xl bg-[#ffffff] flex flex-col items-center">
                    <div className='w-[350px] h-[64px] gap-2 flex flex-col items-center mt-[1rem] lg:mt-[3rem]'>
                        <h2 className='font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]'>Sign In</h2>
                        <p className='font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]'>Welcome to BlockGigs!</p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Persona;
