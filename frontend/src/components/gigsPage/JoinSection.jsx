const JoinSection = () => {
  return (
    <section className="flex mt-10 md:w-[90%] w-full md:mx-auto mx-2 items-center p-1 md:gap-4 gap-4 ">
      <div>
        <button className="bg-[#2F66F6] text-white rounded-md text:sm md:text-md px-2 py-2 md:px-12 md:py-2">
          Sign Up
        </button>
      </div>

      {/* Rounded images */}
      <div className="flex items-center md:gap-2">
        {[...Array(3)].map((_, index) => (
          <img
            key={index}
            src="./images/dp1.png"
            alt="User"
            className="rounded-full border-2 w-10 h-10 md:w-12 md:h-12"
          />
        ))}
      </div>

      <div>
        <p className="text-sm md:text-md">Join +250,000 others</p>
      </div>
    </section>
  );
};

export default JoinSection;
