import { useNavigate } from "react-router-dom";

const JoinSection = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <section className="flex mt-10 w-[90%] mx-auto items-center p-1 md:gap-10 gap-4">
      <div>
        <button
          onClick={handleSignup}
          className="bg-[#2F66F6] text-white rounded-md px-10 py-4 text-sm md:text-md  md:px-12 md:py-4 md:ml-20"
        >
          Sign Up
        </button>
      </div>

      {/* Rounded images */}
      <div className="flex items-center md:gap-5 gap-1">
        {[...Array(3)].map((_, index) => (
          <img
            key={index}
            src=""
            alt="User"
            className="rounded-full border-2 w-10 h-10"
          />
        ))}
      </div>

      <div>
        <p>Join +250,000 others</p>
      </div>
    </section>
  );
};

export default JoinSection;
