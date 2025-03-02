import Navigation from "../navigation";
import { IoSearch } from "react-icons/io5";
// import JoinSection from "./JoinSection";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col ">
      {/* Hero Section (80% height) */}
      <section
        className="relative w-screen h-[80%] min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/hero_banner.png")',
        }}
      >
        <div className="pt-6">
          <Navigation />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D153600] to-[#070C1AB2]"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center w-full h-full p-4 text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Find Your Next High
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
            Paying Tech Gig
          </h1>
          <small className="text-white text-sm sm:text-base md:text-lg mt-4 max-w-xl">
            Find top African tech talents, hire anonymously, and pay securely in
            crypto..
          </small>

          {/* Search Bar */}
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-10">
            <div className="relative flex items-center">
              <IoSearch className="text-gray-400 absolute left-3 text-xl" />
              <input
                type="text"
                placeholder="Product Design"
                className="w-full py-3 pl-10 pr-4 bg-white border rounded-lg text-black outline-none"
              />
            </div>
          </div>

          {/* Buttons Section (Responsive Grid) */}
          <div className="text-white w-[90%] max-w-4xl grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 py-4 mx-auto mt-8">
            {["All Gigs", "Development", "Design", "Contents"].map(
              (label, index) => (
                <button
                  key={index}
                  className="p-2 px-6 text-sm sm:text-base rounded-md backdrop-blur-md bg-[#7979793D] transition duration-300 hover:bg-[#79797980]"
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* JoinSection (20% height) */}
      <div className="h-[20%] flex items-center">{/* <JoinSection /> */}</div>
    </div>
  );
};

export default Hero;
