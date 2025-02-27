// import Navigation from "../navigation";

// const Hero = () => {
//   return (
//     <section
//       className="relative w-screen h-[70vh] sm:h-[70vh] md:h-screen min-h-[500px] bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: 'url("/images/hero_banner.png")',
//       }}
//     >
//       <div className="pt-6">
//         <Navigation />
//       </div>
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#0D153600] to-[#070C1AB2]"></div>
//       {/* Content */}
//       <div className="relative -mt-20 flex flex-col items-center justify-center w-full h-full p-4 text-center">
//         <h1 className="text-white text-4xl md:text-4xl lg:text-6xl xl:text-8xl font-bold">
//           Bringing Great
//         </h1>
//         <h1 className="text-white text-4xl md:text-4xl lg:text-6xl font-bold md:mt-5 mt-10">
//           Work to You
//         </h1>
//         <small className="text-white text-sm md:text-sm lg:text-md mt-4 w-md max-w-xl mt-10">
//           Blockgigs bridges African tech talents with global clients, ensuring
//           secure, bias-free hiring and transparent blockchain payment.
//         </small>
//         {/*
//         <div className="mt-20 md:mt-20">
//           <button className="px-8 py-2 bg-white text-black rounded-md">
//             Join Blockgigs Now
//           </button>

//         </div> */}
//         <div className="relative  w-md mt-10">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full py-2 pl-10 pr-4 bg-white border rounded-md text-black"
//           />
//           <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//             <i className="fa fa-search"></i>
//           </span>
//         </div>
//         <div className="text-white w-[90%] max-w-4xl grid grid-cols-2 sm:grid-cols-4 justify-center gap-4 py-4 mx-auto mt-8">
//           {["All Gigs", "Development", "Design", "Contents"].map(
//             (label, index) => (
//               <button
//                 key={index}
//                 className="p-2 px-6 text-sm sm:text-base rounded-md backdrop-blur-md bg-[#7979793D] transition duration-300 hover:bg-[#79797980]"
//               >
//                 {label}
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Navigation from "../navigation";
import { IoSearch } from "react-icons/io5";
import JoinSection from "./JoinSection";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col">
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
            Bringing Great
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
            Work to You
          </h1>
          <small className="text-white text-sm sm:text-base md:text-lg mt-4 max-w-xl">
            Blockgigs bridges African tech talents with global clients, ensuring
            secure, bias-free hiring and transparent blockchain payment.
          </small>

          {/* Search Bar */}
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-10">
            <div className="relative flex items-center">
              <IoSearch className="text-gray-400 absolute left-3 text-xl" />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-10 pr-4 bg-white border rounded-lg text-black outline-none"
              />
            </div>
          </div>

          {/* Buttons Section (Responsive Grid) */}
          <div className="text-white w-[90%] max-w-4xl flex flex-wrap justify-center gap-4 py-4 mx-auto mt-8">
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
      <div className="h-[20%] flex items-center">
        <JoinSection />
      </div>
    </div>
  );
};

export default Hero;
