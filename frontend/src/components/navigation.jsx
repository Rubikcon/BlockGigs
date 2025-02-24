import { useState, useEffect, useRef } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes, FaBars, FaUserCircle } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef();
  const navigate = useNavigate();

  const links = [
    { name: "Home", href: "/" },
    { name: "Gigs", href: "/gigs" },
    { name: "Browse Talents", href: "/talents" },
    { name: "Leaderboard", href: "/leaderboard" },
  ];

  const handleLinkClick = () => {
    setIsLoading(true);
  };

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="spinner border-t-4 border-b-4 border-gray-700 w-16 h-16 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      <nav className="bg-[#7979793D] max-w-[90%] py-[0.5rem] md:py-[1rem] backdrop-blur-md w-[90%] m-auto text-black sticky top-20 z-50 border-b shadow-lg border rounded-lg">
        <div className="flex justify-between items-center px-6 py-1 max-w-screen-xl mx-auto">
          <div className="cursor-pointer">
            <img
              src="/images/BlockGigs.png"
              alt="BlockGigs logo"
              width={120}
              height={120}
              className="h-10 object-contain"
            />
          </div>

          <ul className="hidden lg:flex items-center space-x-4 font-medium">
            {links.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-white hover:text-white mx-3 text-lg hover:border-b-2 pb-1 hover:border-b-white transition cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="ml-5">
              <button
                onClick={handleGetStarted}
                className="bg-white text-md !important text-black py-2 px-5 rounded-md"
              >
                Get Started
              </button>
            </div>
          </ul>

          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl bg-white text-black p-2 cursor-pointer rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBarsStaggered />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            ref={modalRef}
            className="fixed -ml-15 inset-0 w-screen h-screen bg-opacity-80 flex justify-center items-center z-50"
            style={{
              backgroundImage: 'url("/images/hero_banner.png")',
            }}
          >
            <div className="w-full h-full  max-w-md bg-[#7979793D] backdrop-blur-md rounded-lg shadow-lg p-6 flex flex-col items-center">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 bg-white  left-6 text-black text-2xl cursor-pointer"
              >
                <FaTimes />
              </button>

              <div className="cursor-pointer mb-20">
                <img
                  src="/images/BlockGigs.png"
                  alt="BlockGigs logo"
                  width={120}
                  height={120}
                  className="h-10 object-contain"
                />
              </div>

              <ul className="flex flex-col items-center justify-center space-y-6 w-full">
                {links.map((link) => (
                  <li key={link.name} className="py-5 w-full text-center">
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="mt-20 hover:text-gray-700 font-bold hover:border hover:rounded-md hover:p-4 transition text-white text-lg cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <div className="mt-10">
                  <button
                    onClick={handleGetStarted}
                    className="bg-white hover:font-bold text-black px-7 py-3 rounded-md"
                  >
                    Get Started
                  </button>
                </div>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
