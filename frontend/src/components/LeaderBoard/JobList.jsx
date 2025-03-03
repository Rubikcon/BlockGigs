const jobData = [
  {
    id: 1,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 2,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 3,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 4,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 5,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 6,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 7,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 8,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 9,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 10,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 11,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 14,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 15,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
  {
    id: 16,
    name: "Sheila.....",
    status: 100,
    jobs: 20,
    earnings: "$20,000 USD",
    skills: ["Smart Contract", "Fullstack"],
  },
];

const JobList = () => {
  return (
    <div>
      <div>
        <section className="border-b-2 my-10 mx-auto text-center md:text-left w-md md:w-3xl border-gray-300 pb-3">
          {/* Desktop View - List */}
          <ul className="hidden md:flex flex-wrap justify-between w-full">
            <button className="font-bold text-sm text-gray-600 bg-gray-200 border border-1 border-gray-200 p-2 rounded-full cursor-pointer">
              All Gigs
            </button>
            <button className="text-gray-500 hover:text-blue-600 border border-1 border-gray-200 p-2 rounded-full cursor-pointer">
              Development
            </button>
            <button className="text-gray-500 hover:text-blue-600 border border-1 border-gray-200 p-2 rounded-full cursor-pointer">
              Design
            </button>
            <button className="text-gray-500 hover:text-blue-600 border border-1 border-gray-200 p-2 rounded-full cursor-pointer">
              Content
            </button>
            {/* <button className="text-gray-500 hover:text-blue-600 border border-1 border-gray-200 p-2 rounded-md cursor-pointer">
              Others
            </button> */}
          </ul>

          {/* Mobile View - Select Menu */}
          <select className="md:hidden block w-full border p-2 rounded">
            <option>All Gigs</option>
            <option> Design</option>
            <option>Development</option>
            <option>Content</option>
            <option value=""> Others</option>
          </select>
        </section>
      </div>
      <div className="w-full overflow-x-auto p-2">
        <div className="w-full w-4xl md:w-[90%] mx-auto bg-gray-100 rounded-lg shadow-md p-3">
          <table className="w-full border-collapse bg-white rounded-lg shadow-md text-xs md:text-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-700 font-semibold text-left">
                <th className="p-2 md:p-3">Ranking</th>
                <th className="p-2 md:p-3">Profile</th>
                <th className="p-2 md:p-3">Job Success</th>
                <th className="p-2 md:p-3">No. of Jobs</th>
                <th className="p-2 md:p-3">Earnings</th>
                <th className="p-2 md:p-3">Skills</th>
              </tr>
            </thead>
            <tbody>
              {jobData.map((job) => (
                <tr key={job.id} className="border-t border-gray-300">
                  <td className="p-2 md:p-3">#{job.id}</td>
                  <td className="p-2 md:p-3 flex items-center">
                    <img
                      src="/images/TalentProfile.png"
                      alt="Profile"
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2"
                    />
                    <span className="font-bold">{job.name}</span>
                  </td>
                  <td className="p-2 md:p-3">{job.status}%</td>
                  <td className="p-2 md:p-3 text-center">{job.jobs}</td>
                  <td className="p-2 md:p-3 text-green-600 font-semibold">
                    {job.earnings}
                  </td>
                  <td className="p-2 md:p-3">
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {job.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-blue-500 text-white text-[10px] md:text-xs px-1 md:px-2 py-0.5 md:py-1 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobList;
