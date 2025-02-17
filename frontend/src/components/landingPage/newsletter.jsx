import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState(""); // State for email input
  const [message, setMessage] = useState(""); // State for feedback message

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate an API call or further processing
    console.log("Subscribed with email:", email);
    setMessage("Thank you for subscribing!");

    // Reset email input after submission
    setEmail("");
  };

  return (
    <section className="relative w-[90%] sm:w-[85%] mx-auto py-10 flex flex-col justify-center items-center">
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
        <div className="w-full px-4">
          <form
            onSubmit={handleSubmit}
            className="flex bg-white rounded-full overflow-hidden shadow-md w-sm mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 text-gray-700 text-sm md:text-base focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#206BDC] text-white px-4 sm:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-r-full hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Feedback Message */}
          {message && (
            <p className="text-sm text-white text-center mt-3">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
