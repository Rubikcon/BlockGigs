import Navigation from "./navigation"

const Hero = () => {
  return (
    <section
      className="relative w-screen h-screen min-h-[500px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/hero_banner.png")',
      }}
    >
      {/* <Navigation/> */}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D153600] to-[#070C1AB2]"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center w-full h-full p-4 text-center">
        <h1 className="text-white text-md md:text-4xl lg:text-6xl xl:text-8xl font-bold">
          Tech Gigs Made Simple
        </h1>
        <h1 className="text-white text-md md:text-4xl lg:text-6xl  font-bold md:mt-5 mt-2">
          Payment Made Easy
        </h1>
        <small className="text-white font-semibold text-xs md:text-sm lg:text-xs mt-4 max-w-lg">
          Blockgigs bridges African tech talents with global clients, ensuring
          secure, bias-free hiring and transparent blockchain payment.
        </small>

        <div className="mt-5 md:mt-10">
          <button className="px-8 b py-5 bg-white text-black">Join Blockgigs Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
