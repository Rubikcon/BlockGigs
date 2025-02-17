import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0A0F29] dark:bg-gray-900 w-screen border border-red-500">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="/public/images/white_BlockGigs.png"
                className="h-8 me-3"
                alt="BlockGigs Logo"
              />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span> */}
            </a>
            <p className="w-sm my-4 text-gray-300">
              Find top African tech talents, hire anonymously, and pay securely
              in crypto.
            </p>
            <div>
              <ul className="text-white flex gap-5">
                <li>
                  <PiFacebookLogoBold />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaXTwitter />
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {[
              {
                title: "About",
                links: [
                  { text: "How It Works", href: "/" },
                  { text: "Featured", href: "/" },
                  { text: "Partnership", href: "/" },
                  {
                    text: "Business Relation",
                    href: "/",
                  },
                ],
              },
              {
                title: "Community",
                links: [
                  {
                    text: "Events",
                    href: "/",
                  },
                  { text: "Discord", href: "/" },
                  { text: "Blog", href: "/" },
                  { text: "Podcast", href: "/" },
                  { text: "Invite a Fried", href: "/" },
                ],
              },
              {
                title: "Socials",
                links: [
                  { text: "Discord", href: "/" },
                  { text: "Instagram", href: "#" },
                  { text: "Twitter", href: "#" },
                  { text: "Facebook", href: "#" },
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                  {section.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {section.links.map((link, idx) => (
                    <li key={idx} className="mb-4">
                      <a href={link.href} className="hover:underline">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              BlockGigs
            </a>
            . All Rights Reserved.
          </span>
          {/* Social Media Icons */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
