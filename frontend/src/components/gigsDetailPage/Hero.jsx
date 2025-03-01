import Navigation from "../navigation";
import { IoSearch } from "react-icons/io5";

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
        <div className="relative flex flex-col gap-3 items-center justify-center w-full h-full p-4 text-center">
          {/* The left section of the hero */}
          <div>
            <div className="p-2">
              <h2 className="text-white font-bold text-lg md:text-2xl">
                Product Design Intern at CryptoKitties
              </h2>
              <p className="text-white">
                We're looking for a creative and detail-oriented Product Design
                Intern to join the CryptoKitties team. As part of our design and
                development teams, you'll help craft engaging user experiences
                for our blockchain-based collectibles game
              </p>
            </div>
          </div>

          {/* The right section of the hero */}
          <div className="rounded-md">
            <div>
              <img src="" alt="logo" className="rounded-full" />
              <h3>Product Design Intern at CryptoKitties</h3>
              <small>Rate: 0.05 USDT per hour</small>
            </div>
            <div>
              <button className="w-full px-4 py-1 bg-blue-700 text-white">
                Apply
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* JoinSection (20% height) */}
      <div className="h-[20%] flex items-center">{/* <JoinSection /> */}</div>
    </div>
  );
};

export default Hero;
