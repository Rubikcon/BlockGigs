import Navigation from "../navigation";

const Hero = () => {
  return (
    <div className=" flex flex-col ">
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
        <div className="relative flex flex-col mt-10 py-10 md:flex-row gap-4 items-center justify-center w-[90%] mx-auto h-full p-4 text-center">
          {/* The left section of the hero */}
          <div className="w-full md:w-2/3 p-2">
            <div className="p-2 md:text-left text-center">
              <h2 className="text-white font-bold text-2xl md:text-5xl lg:text-6xl my-2">
                Product Design Intern at CryptoKitties
              </h2>
              <p className="text-white text-sm md:w-[70%] w-full">
                We're looking for a creative and detail-oriented Product Design
                Intern to join the CryptoKitties team. As part of our design and
                development teams, you'll help craft engaging user experiences
                for our blockchain-based collectibles game.
              </p>
            </div>
          </div>

          {/* The right section of the hero */}
          <div className="rounded-md bg-white py-5 px-4 w-full md:w-1/3">
            <div>
              <div className="flex gap-2">
                <img
                  src=""
                  alt="logo"
                  className="rounded-full bg-gray-900 h-12 w-12"
                />
                <h3>Product Design Intern at CryptoKitties</h3>
              </div>
              <small>Rate: 0.05 USDT per hour</small>
            </div>
            <div className="py-2">
              <button className="w-full px-4 py-1 bg-blue-700 text-white rounded-md cursor-pointer">
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
