import { useState, useEffect, useRef } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaTimes, FaBars, FaUserCircle } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef();

  const links = [
    { name: "Home", href: "/" },
    { name: "Gigs", href: "/gigs" },
    { name: "Browse Talents", href: "/talents" },
    { name: "Leaderboard", href: "/leaderboard" },
    // { name: "FAQ", href: "/faq" },
    // { name: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsLoading(true);
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

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="spinner border-t-4 border-b-4 border-gray-700 w-16 h-16 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      <nav className="bg-[#7979793D] max-w-[90%] md:py-[1rem] w-[90%] m-auto text-black sticky top-0 z-50 border-b shadow-lg border border-red-800 rounded-full">
        <div className="flex justify-between items-center px-6 py-1 max-w-screen-xl mx-auto">
          <div className="cursor-pointer">
            <img
              src="/images/BlockGigs.png"
              alt="BlockGigs logo"
              width={60}
              height={60}
              className="h-10 object-contain"
            />
          </div>

          <ul className="hidden lg:flex items-center space-x-4 font-medium">
            {links.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="hover:text-gray-700 text-black text-xl hover:border-b-2 pb-1 hover:border-b-red-800 transition cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <button className="bg-white text-black p-2">Get Started</button>
          </div>

          

          <div className="lg:hidden flex items-center space-x-2">
          
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-black cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-40 flex items-center justify-center">
            <div
              ref={modalRef}
              className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-2 relative flex flex-col justify-center"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-2xl text-black cursor-pointer"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
              <ul className="flex flex-col items-center justify-center space-y-2">
                {links.map((link) => (
                  <li key={link.name} className="border-b-2 border-gray-300 py-2 w-full text-center">
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:text-gray-700 transition cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
