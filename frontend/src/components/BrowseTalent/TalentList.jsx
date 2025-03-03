import { CiCalendarDate } from "react-icons/ci";

const talents = [
  {
    id: 1,
    name: "Kovac Lajos",
    description: "I create responsive and user-friendly applications.",
    skills: ["Web3 Development", "Smart Contract", "Project Manager"],
    rate: "5 USDC / hr",
    availability: "Available",
    imageUrl: "./images/dp1.png",
  },
  {
    id: 2,
    name: "Amina Yusuf",
    description: "Experienced blockchain engineer with a passion for DeFi.",
    skills: ["Blockchain", "Solidity", "Smart Contracts"],
    rate: "7 USDC / hr",
    availability: "Available",
    imageUrl: "./images/dp2.png",
  },
  {
    id: 3,
    name: "John Doe",
    description: "Building scalable dApps and decentralized solutions.",
    skills: ["Fullstack Dev", "Web3", "Ethereum"],
    rate: "6 USDC / hr",
    availability: "Available",
    imageUrl: "./images/dp3.png",
  },
];

const TalentList = () => {
  return (
    <div className="w-[90%] mx-auto py-6">
      {/* Header Section */}
      {/* <section className="text-center mb-6">
       */}
      <section className="mb-6 text-center md:text-left w-[95%] mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl">
          African Top Tech Talents
        </h1>
        <small className="text-gray-500 block mt-1">
          56,755 Talents on our Platform
        </small>
      </section>
      {/* Filter Buttons */}
      <section className="border-b-2 text-center md:text-left w-full mx-auto border-gray-300 pb-3">
        {/* Desktop View - List */}
        <ul className="hidden md:flex flex-wrap justify-between w-full">
          <button className="font-bold text-sm text-blue-600">Popular</button>
          <button className="text-gray-500 hover:text-blue-600">
            Blockchain
          </button>
          <button className="text-gray-500 hover:text-blue-600">
            Smart Contract
          </button>
          <button className="text-gray-500 hover:text-blue-600">
            View LeaderBoard
          </button>
        </ul>

        {/* Mobile View - Select Menu */}
        <select className="md:hidden block w-full border p-2 rounded">
          <option>Popular</option>
          <option>Blockchain</option>
          <option>Smart Contract</option>
          <option>View LeaderBoard</option>
        </select>
      </section>

      {/* Talent Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {talents.map((talent) => (
          <div
            key={talent.id}
            className="border border-gray-200 shadow-md rounded-lg p-4 bg-white transition transform hover:scale-105 flex flex-col h-full"
          >
            {/* Profile Header */}
            <div className="flex items-center gap-4">
              <img
                src={talent.imageUrl}
                alt="profile-pic"
                className="h-16 w-16 rounded-full border-2 border-gray-300"
              />
              <h2 className="text-lg font-bold">{talent.name}</h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-3 flex-grow">{talent.description}</p>

            {/* Skills */}
            <div className="mt-4">
              <ul className="flex flex-wrap gap-2">
                {talent.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Rate & Availability */}
            <div className="flex justify-between items-center mt-4 mb-5 text-sm">
              <h2 className="text-blue-600 font-bold">{talent.rate}</h2>
              <span className="flex items-center gap-1 text-gray-600">
                <CiCalendarDate />
                {talent.availability}
              </span>
            </div>

            {/* Sticky View Profile Button */}
            <div className="mt-auto">
              <button className="bg-[#2F66F6] text-white w-full py-2 px-4 rounded-md cursor-pointer">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="bg-[#2F66F6] text-white py-2 px-20 rounded-md cursor-pointer">
          Show More
        </button>
      </div>
    </div>
  );
};

export default TalentList;
