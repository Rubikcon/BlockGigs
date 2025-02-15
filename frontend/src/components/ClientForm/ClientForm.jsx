import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/3dcube.png';

const ClientForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/ClientDashboard");
    };

    const handleSkip = () => {
        navigate("/ClientDashboard"); // Navigate when the user skips the form
    };

    return (
        <div className='w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat items-center'>
            <div className='w-[103px] h-[37px] flex justify-between items-center gap-2 ml-4'>
                <img src={logo} alt="Blockgigs logo" className='mt-4' />
                <h1 className='font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo mt-4'>Blockgigs</h1>
            </div>

            <div className="flex items-center justify-center mt-[4rem]">
                <form
                    onSubmit={handleSubmit}
                    className="w-[300px] h-[500px] lg:w-[422px] lg:h-[615px] rounded-xl bg-[#ffffff] flex flex-col items-center"
                >
                    <div className='w-[350px] h-[64px] gap-2 flex flex-col items-center mt-[1rem] lg:mt-[3rem]'>
                        <h2 className='font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]'>Profile Information</h2>
                        <p className='font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]'>Client, Please fill out your information</p>
                    </div>

                    <div className='w-[300px] lg:w-[470px] h-[238px] flex flex-col items-center mt-[2rem] gap-5'>
                        <div className='w-[260px] lg:w-[350px] h-[70px] flex flex-col items-start'>
                            <label className='font-montserrat font-medium text-[14px] leading-6 text-[#292929]' htmlFor="name">Full name</label>
                            <input
                                className='w-[257px] lg:w-[350px] h-[42px] rounded-[8px] border-[1px] border-[#dbdbdb] outline-[#dbdbdb] font-montserrat font-medium text-[14px] leading-6 text-[#000]'
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Anita Baker'
                                required
                            />
                        </div>

                        <div className='w-[260px] lg:w-[350px] h-[70px] flex flex-col items-start'>
                            <label className='font-montserrat font-medium text-[14px] leading-6 text-[#292929]' htmlFor="work">About you & what you do</label>

                            <textarea
                                id="work"
                                placeholder="Business or individual looking to hire..."
                                className="w-full h-[500px] mt-[0.5rem] rounded-[8px] border border-[#DBDBDB] p-14 overflow-hidden outline-[#dbdbdb] resize-none font-montserrat font-medium text-[14px] leading-6 text-[#000]"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className='w-[260px] lg:w-[350px] h-[48px] cursor-pointer mt-[2rem] lg:mt-[3rem] rounded-[8px] px-[32px] py-[12px] bg-[#2F66F6] font-montserrat font-medium text-[14px] lg:text-base leading-6 text-white'
                    >
                        Profile Done!
                    </button>

                    {/* Skip Button */}
                    <button
                        type='button'
                        className='font-montserrat font-medium text-[14px] lg:text-base leading-6 text-[#2f66f6] cursor-pointer mt-[1rem]'
                        onClick={handleSkip}
                        aria-label="Skip this form and fill later"
                    >
                        Skip Profile, I will fill later
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ClientForm;
