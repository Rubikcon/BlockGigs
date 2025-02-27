const JoinSection = () => {
  return (
    <section className="flex mt-10 w-[80%] mx-auto items-center border border-1 p-1 gap-4">
      <div>
        <button className="bg-[#2F66F6] text-white rounded-md px-12 py-2">
          Sign Up
        </button>
      </div>

      {/* Rounded images */}
      <div className="flex items-center gap-2">
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
