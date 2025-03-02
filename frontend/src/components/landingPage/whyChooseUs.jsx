import { useNavigate } from "react-router-dom";

export default function WhyChooseUs() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };
  return (
    <section className="relative max-w-[95%] m-auto w-full py-16 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center overflow-hidden">
      {/* Header Section */}
      <div className="text-center my-3 px-6 w-full max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-bold">Why Choose Us</h1>
        <p className="text-sm md:text-lg text-gray-700 pt-4">
          Discover why Blockgigs is the preferred choice for tech professionals
          and clients seeking secure, transparent, and efficient freelance
          solutions in the blockchain era.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl mt-10 md:mt-16 px-6">
        {/* Overlapping Cards */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-full max-w-sm md:max-w-lg">
            {/* Blue Card (Below) */}
            <div className="bg-[#206BDC] p-6 rounded-lg shadow-lg w-full h-80 transform translate-x-6 translate-y-6"></div>
            {/* Gray Card (Above) */}
            <div className="bg-[#F3F3F3] p-6 rounded-lg shadow-lg w-full h-80 absolute top-10 -left-5"></div>
          </div>
        </div>

        {/* Features List */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-5 m:gap-10">
          <ul className="list-disc pl-7 font-bold text-gray-700  space-y-8">
            <li>Blockchain-secured transactions</li>
            <li>Pseudonymous, bias-free hiring</li>
            <li>Milestone-based payments with smart contracts</li>
            <li>Instant cross-border payments in USDC and other stablecoins</li>
          </ul>

          <button
            onClick={handleGetStarted}
            className="bg-[#206BDC] text-white py-2 px-6 rounded-lg mt-4 hover:bg-[#1d4ed8] transition cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
