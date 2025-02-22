import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/3dcube.png';

const ClientForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [work, setWork] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        if (!name.trim()) newErrors.name = "Full Name is required.";
        if (!work.trim()) newErrors.work = "Please describe what you do.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            navigate("/ClientDashboard");
        }
    };

    const handleSkip = () => {
        navigate("/ClientDashboard");
    };

    return (
        <div className='w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center'>

            {/* Logo Section */}
            <div className='w-[103px] h-[37px] flex justify-between items-center gap-2 mt-4 ml-4'>
                <img src={logo} alt="Blockgigs logo" className='mt-4' />
                <h1 className='font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo mt-4'>
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
                    <div className='w-[350px] flex flex-col items-center mt-[1rem] lg:mt-[3rem] text-center'>
                        <h2 id="form-title" className='font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]'>
                            Profile Information
                        </h2>
                        <p className='font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]'>
                            Client, Please fill out your information
                        </p>
                    </div>

                    <div className='w-full flex flex-col items-center mt-[2rem] gap-5'>

                        {/* Full Name Input */}
                        <div className='w-[260px] lg:w-[350px] h-[70px] flex flex-col items-start'>
                            <label
                                htmlFor="name"
                                className='font-montserrat font-medium text-[14px] leading-6 text-[#292929]'
                            >
                                Full name <span className="text-red-600">*</span>
                            </label>
                            <input
                                className={`w-full h-[42px] rounded-[8px] border-[1px] px-3 outline-none font-montserrat text-[14px] leading-6 text-[#000] ${errors.name ? 'border-red-500' : 'border-[#dbdbdb]'
                                    }`}
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                aria-required="true"
                                aria-describedby="name-error"
                            />
                            {errors.name && (
                                <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Work/Business Description */}
                        <div className='w-[260px] lg:w-[350px] h-auto flex flex-col items-start'>
                            <label
                                htmlFor="work"
                                className='font-montserrat font-medium text-[14px] leading-6 text-[#292929]'
                            >
                                About you & what you do <span className="text-red-600">*</span>
                            </label>

                            <textarea
                                id="work"
                                name="work"
                                value={work}
                                onChange={(e) => setWork(e.target.value)}
                                placeholder="Business or individual looking to hire..."
                                className={`w-full h-[100px] rounded-[8px] border px-3 py-2 outline-none resize-none font-montserrat text-[14px] leading-6 text-[#000] ${errors.work ? 'border-red-500' : 'border-[#dbdbdb]'
                                    }`}
                                aria-required="true"
                                aria-describedby="work-error"
                            />
                            {errors.work && (
                                <p id="work-error" className="text-red-600 text-sm mt-1" role="alert">
                                    {errors.work}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className='w-[260px] lg:w-[350px] h-[48px] cursor-pointer mt-[2rem] lg:mt-[3rem] rounded-[8px] bg-[#2F66F6] text-white font-montserrat text-[14px] lg:text-base leading-6 focus:ring-2 focus:ring-blue-400'
                    >
                        Profile Done!
                    </button>

                    {/* Skip Button */}
                    <button
                        type='button'
                        className='font-montserrat font-medium text-[14px] lg:text-base leading-6 text-[#2f66f6] cursor-pointer mt-[1rem] underline focus:ring-2 focus:ring-blue-400'
                        onClick={handleSkip}
                        aria-label="Skip this form and fill later"
                    >
                        Skip Profile, I will fill later
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ClientForm;
