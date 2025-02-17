export default function Newsletter() {
  return (
    <section className="relative w-[90%] sm:w-[85%] mx-auto py-10 flex flex-col justify-center items-center ">
      {/* Newsletter Card */}
      <div
        className="flex flex-col items-center gap-4 px-6 py-6 w-full max-w-8xl rounded-lg sm:py-8 sm:px-8"
        style={{
          backgroundImage: 'url("/images/hero_banner.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h2 className="font-bold text-2xl md:text-5xl py-5 sm:text-3xl text-white">
            Subscribe To Our
          </h2>
          <h2 className="font-bold text-2xl md:text-4xl sm:text-3xl text-white">
            Newsletter
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-bold text-white mt-4">
            Stay Connected – Unlock Exclusive Content and Insider Discounts
          </p>
        </div>

        {/* Subscription Form */}
        <div className="w-md px-4">
          <form className="flex bg-white rounded-full overflow-hidden shadow-md w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 text-gray-700 text-sm md:text-base focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 sm:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-r-full hover:bg-gray-300 hover:text-white transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
