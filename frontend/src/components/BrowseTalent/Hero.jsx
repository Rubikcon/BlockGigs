import Navigation from "../navigation";
import { IoSearch } from "react-icons/io5";
// import JoinSection from "./JoinSection";

const Hero = () => {
  return (
    <div className=" flex flex-col ">
      {/* Hero Section (80% height) */}
      <section
        className="relative  w-screen h-[80%] min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/hero_banner.png")',
        }}
      >
        <div className="pt-6">
          <Navigation />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute  inset-0 bg-gradient-to-r from-[#0D153600] to-[#070C1AB2]"></div>

        {/* Content */}
        <div className="relative py-15 flex flex-col items-center justify-center w-full h-full p-4 text-center">
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
        </div>
      </section>
    </div>
  );
};

export default Hero;
