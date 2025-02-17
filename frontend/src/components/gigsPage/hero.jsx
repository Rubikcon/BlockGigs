import Navigation from "../navigation";

const Hero = () => {
  return (
    <section
      className="relative w-screen h-[70vh] sm:h-[70vh] md:h-screen min-h-[500px] bg-cover bg-center bg-no-repeat"
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
          Bringing Great
        </h1>
        <h1 className="text-white text-4xl md:text-4xl lg:text-6xl font-bold md:mt-5 mt-10">
          Work to You
        </h1>
        <small className="text-white text-sm md:text-sm lg:text-md mt-4 w-md max-w-xl mt-10">
          Blockgigs bridges African tech talents with global clients, ensuring
          secure, bias-free hiring and transparent blockchain payment.
        </small>
        {/* 
        <div className="mt-20 md:mt-20">
          <button className="px-8 py-2 bg-white text-black rounded-md">
            Join Blockgigs Now
          </button>
        
        </div> */}
        <div className="relative  w-md mt-10">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-10 pr-4 bg-white border rounded-md text-black"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
