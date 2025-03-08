import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/3dcube.png";
import Select from "react-select";

const TalentForm = () => {
  const navigate = useNavigate();
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/TalentDashboard");
  };

  const handleSkip = () => {
    navigate("/TalentDashboard"); // Navigate when the user skips the form
  };

  const hangleChange = (code) => {
    setSelectedLanguages(
      (prev) =>
        prev.includes(code)
          ? prev.filter((lang) => lang !== code)
          : // Remove if already selected
            [...prev, code]
      // Add if not selected
    );
  };

  const timeZones = [
    { code: "UTC-12", name: "Etc/GMT+12" },
    { code: "UTC-11", name: "Etc/GMT+11" },
    { code: "UTC-10", name: "Pacific/Honolulu" },
    { code: "UTC-9", name: "America/Anchorage" },
    { code: "UTC-8", name: "America/Los_Angeles" },
    { code: "UTC-7", name: "America/Denver" },
    { code: "UTC-6", name: "America/Chicago" },
    { code: "UTC-5", name: "America/New_York" },
    { code: "UTC-4", name: "America/Santiago" },
    { code: "UTC-3", name: "America/Argentina/Buenos_Aires" },
    { code: "UTC-2", name: "Atlantic/South_Georgia" },
    { code: "UTC-1", name: "Atlantic/Azores" },
    { code: "UTC", name: "UTC" },
    { code: "UTC+1", name: "Europe/Paris" },
    { code: "UTC+2", name: "Europe/Athens" },
    { code: "UTC+3", name: "Europe/Moscow" },
    { code: "UTC+4", name: "Asia/Dubai" },
    { code: "UTC+5", name: "Asia/Karachi" },
    { code: "UTC+6", name: "Asia/Dhaka" },
    { code: "UTC+7", name: "Asia/Bangkok" },
    { code: "UTC+8", name: "Asia/Shanghai" },
    { code: "UTC+9", name: "Asia/Tokyo" },
    { code: "UTC+10", name: "Australia/Sydney" },
    { code: "UTC+11", name: "Pacific/Noumea" },
    { code: "UTC+12", name: "Pacific/Auckland" },
    { code: "WAT", name: "Africa/Lagos" },
    { code: "WAT", name: "Africa/Libreville" },
    { code: "WAT", name: "Africa/Luanda" },
    { code: "WAT", name: "Africa/Douala" },
    { code: "WAT", name: "Africa/Ndjamena" },
    { code: "CAT", name: "Africa/Harare" },
    { code: "CAT", name: "Africa/Lusaka" },
    { code: "CAT", name: "Africa/Blantyre" },
    { code: "EAT", name: "Africa/Nairobi" },
    { code: "EAT", name: "Africa/Dar_es_Salaam" },
    { code: "EAT", name: "Africa/Kampala" },
    { code: "SAST", name: "Africa/Johannesburg" },
    { code: "GMT", name: "Africa/Accra" },
    { code: "GMT", name: "Africa/Bamako" },
    { code: "GMT", name: "Africa/Dakar" },
    { code: "GMT", name: "Africa/Conakry" },
  ];

  const programmingLanguages = [
    { value: "JS", label: "JavaScript" },
    { value: "PY", label: "Python" },
    { value: "JAVA", label: "Java" },
    { value: "C", label: "C" },
    { value: "CPP", label: "C++" },
    { value: "CS", label: "C#" },
    { value: "RB", label: "Ruby" },
    { value: "PHP", label: "PHP" },
    { value: "TS", label: "TypeScript" },
    { value: "SWIFT", label: "Swift" },
    { value: "GO", label: "Go" },
    { value: "R", label: "R" },
    { value: "KOT", label: "Kotlin" },
    { value: "DART", label: "Dart" },
    { value: "SCALA", label: "Scala" },
    { value: "PERL", label: "Perl" },
    { value: "LUA", label: "Lua" },
    { value: "HASKELL", label: "Haskell" },
    { value: "RUST", label: "Rust" },
    { value: "SQL", label: "SQL" },
    { value: "SHELL", label: "Shell Scripting" },
  ];

  return (
    <div className="w-full  min-h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat items-center">
      <div className="w-[103px] h-[37px] flex justify-between items-center gap-2 ml-4">
        <img src={logo} alt="Blockgigs logo" className="mt-4" />
        <h1 className="font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo mt-4">
          Blockgigs
        </h1>
      </div>

      <div className="flex  items-center justify-center mt-[2rem] ">
        <form
          className="w-[300px]  h-full lg:w-[841px] lg:h-[648px] top-[178px] left-[299px] rounded-xl bg-[#ffffff] flex flex-col items-center "
          onSubmit={handleSubmit}
        >
          <div className="w-[500px] lg:w-[762px] h-[76px] top-[38px] left-[40px] gap-2 flex flex-col items-center mt-[2rem]">
            <h2 className="font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]">
              Profile Information
            </h2>
            <p className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]">
              Tell clients about you and what you do
            </p>
            <p className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767] mt-[-0.7rem] max-w-[210px] sm:max-w-[290px] lg:max-w-none whitespace-normal lg:whitespace-nowrap">
              Profiles are pseudonymous, allowing to keep identity private to
              avoid bias hiring
            </p>
          </div>

          <div className="flex flex-col items-center mt-[4rem] px-4 lg:px-0 pb-10">
            <div className="w-full max-w-[250px] lg:max-w-[766px] flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="name"
                    placeholder="Anita Baker"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="work"
                  >
                    Pseudonymous/Work Name
                  </label>
                  <input
                    className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="work"
                    placeholder="Designhandz"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="profile"
                  >
                    What you do?
                  </label>
                  <input
                    className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="profile"
                    placeholder="Product Designer"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="pay"
                  >
                    Minimum pay range (per hour)
                  </label>
                  <input
                    className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="pay"
                    placeholder="$10/hr"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="timezone"
                  >
                    Time Zone (UTC)
                  </label>
                  <select
                    id="timezone"
                    className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" disabled>
                      Select time zone
                    </option>
                    {timeZones.map((zone) => (
                      <option key={zone.name} value={zone.code}>
                        {zone.code} - {zone.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="language"
                  >
                    Proficient Languages
                  </label>
                  <select
                    id="language"
                    className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" disabled>
                      Select Language
                    </option>
                    {programmingLanguages.map((lang) => (
                      <option key={lang.name} value={lang.code}>
                        {lang.name} ({lang.code})
                      </option>
                    ))}
                  </select>
                </div> */}

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-800">
                    Proficient Languages
                  </label>

                  <Select
                    isMulti
                    options={programmingLanguages}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row  lg:justify-between items-center gap-4">
                <div className="flex flex-col items-start">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="work-profile"
                  >
                    About you or what you do
                  </label>
                  <textarea
                    className="w-[200px] lg:w-[432px] h-[96px] rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                    id="work-profile"
                    placeholder="A well profession..."
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="skills"
                  >
                    Main skills you possess
                  </label>
                  <input
                    className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="skills"
                    placeholder="Skill No 1"
                  />
                  <div className="flex flex-col md:flex-row gap-4 mt-2">
                    <input
                      className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      placeholder="Skill No 2"
                      required
                      aria-required="true"
                    />
                    <input
                      className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      placeholder="Skill No 3"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-3">
                <button className="w-full md:w-1/2 h-12 cursor-pointer rounded-lg bg-blue-600 text-white font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Profile Done!
                </button>
                <button
                  onClick={handleSkip}
                  className="w-full md:w-1/2 h-12 cursor-pointer rounded-lg border border-blue-600 text-blue-600 font-medium text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Skip, I will fill later
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TalentForm;
