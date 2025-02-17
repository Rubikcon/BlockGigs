export default function Newsletter() {
  return (
    <section className="relative w-[85%] mx-auto py-10 flex flex-col justify-center items-center">
      {/* Newsletter Card */}
      <div
        className="flex flex-col items-center gap-4 px-6 py-6 w-full max-w-lg rounded-lg"
        style={{
          backgroundImage: 'url("/images/hero_banner.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h2 className="font-bold text-2xl sm:text-3xl text-white">
            Subscribe To Our
          </h2>
          <h2 className="font-bold text-2xl sm:text-3xl text-white">
            Newsletter
          </h2>
          <p className="text-xs sm:text-sm text-white mt-4">
            Stay Connected – Unlock Exclusive Content and Insider Discounts
          </p>
        </div>

        {/* Subscription Form */}
        <div className="w-full px-4">
          <form className="flex bg-white rounded-full overflow-hidden shadow-md w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 text-gray-700 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 sm:px-6 py-2 text-sm font-medium rounded-r-full hover:bg-gray-300 hover:text-white transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
