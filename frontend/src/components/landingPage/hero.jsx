import Navigation from "../navigation";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };
  return (
    <section
      className="relative w-screen h-screen min-h-[500px] bg-cover bg-center bg-no-repeat"
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
      <div className="relative -mt-20 flex flex-col items-center justify-center w-full h-full p-4 text-center">
        <h1 className="text-white text-4xl md:text-4xl lg:text-6xl xl:text-8xl font-bold">
          Tech Gigs Made Simple
        </h1>
        <h1 className="text-white text-4xl md:text-4xl lg:text-6xl font-bold md:mt-5 mt-10">
          Payment Made Easy
        </h1>
        <small className="text-white text-sm md:text-sm lg:text-md mt-4 w-md max-w-xl mt-10">
          Blockgigs bridges African tech talents with global clients, ensuring
          secure, bias-free hiring and transparent blockchain payment.
        </small>

        <div className="mt-20 md:mt-20">
          <button
            onClick={handleGetStarted}
            className="px-8 b py-2 bg-white text-black rounded-md cursor-pointer"
          >
            Join Blockgigs Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
