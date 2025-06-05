import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/3dcube.png";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-hot-toast";

const TalentForm = () => {
  const navigate = useNavigate();
  // At the top of your component, keep only:
  const [formData, setFormData] = useState({
    fullname: "",
    workname: "",
    profession: "",
    min_pay: "",
    timezone: "",
    about: "",
    skills: ["", "", ""],
    languages: [],
  });

  const handleAddSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""], // Add an empty string to the skills array
    }));
  };

  const handleRemoveSkill = (index) => {
    const newSkills = [...formData.skills];
    newSkills.splice(index, 1); // Remove skill at the index
    setFormData((prev) => ({
      ...prev,
      skills: newSkills,
    }));
  };

  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const userData = [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillsChange = (index, value) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData((prev) => ({
      ...prev,
      skills: newSkills,
    }));
  };

  // const handleLanguagesChange = (e) => {
  //   const options = Array.from(e.target.selectedOptions);

  //   const values = options.map((opt) => opt.value).filter((v) => v !== "");

  //   setSelectedLanguages(values);
  // };

  const handleGotoHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    console.log("Submitting...");
    e.preventDefault();

    try {
      setLoading(true);

      // Get Auth data
      const walletAddress = localStorage.getItem("userAddress");
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");

      const detectWallet =
        location.state?.detectWallet === true ||
        localStorage.getItem("detectWallet") === "true" ||
        localStorage.getItem("walletClicked") === "true";

      const userRole = localStorage.getItem("Persona") || "talent";
      const userWalletAddress = localStorage.getItem("userAddress") || "";
      const userPassword = localStorage.getItem("password") || "";
      const userEmail = localStorage.getItem("email") || "";

      // Determine registration type
      const isWalletUser = !!userWalletAddress;
      const isEmailUser = !!userEmail && !!userPassword;

      if (!isWalletUser && !isEmailUser) {
        throw new Error("Please connect wallet or provide email/password");
      }

      // Prepare payload according to your Mongoose model
      const payload = {
        fullname: formData.fullname,
        work_name: formData.workname,
        profession: formData.profession,
        min_pay: formData.min_pay,
        time_zone: formData.timezone, // Note the underscore to match model
        about: formData.about,
        languages: formData.languages.map((lang) => lang.value),
        skills: formData.skills.filter((skill) => skill.trim() !== ""),
        role: localStorage.getItem("Persona") || "talent",
        ...(isWalletUser
          ? { wallet_address: walletAddress }
          : { email, password }),
      };

      // Determine endpoint
      const endpoint = isWalletUser
        ? `${apiUrl}/api/auth/register-wallet`
        : `${apiUrl}/api/auth/register-email`;

      const response = await axios.post(endpoint, payload);

      // alert(response.data.message);
      toast.success(response.data.message);
      console.log("login to continue");
      // console.log(response.data.message);
      console.log(response.data);
      navigate("/signin");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Registration failed");
      // alert(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
      // clear flags
      // In your finally block, use removeItem instead of setItem to "false"
      localStorage.removeItem("walletClicked");
      localStorage.removeItem("detectWallet");
      // localStorage.setItem("walletClicked", "false");
      // localStorage.setItem("detectWallet", "false");
    }
  };

  const handleChange = (code) => {
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
    { value: "", label: "None" },
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
      <div
        onClick={handleGotoHome}
        className="w-[103px] h-[37px] flex justify-between items-center gap-2 ml-4 cursor-pointer"
      >
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
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    // onChange={(e) => setFullname(e.target.value)}
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
                    name="workname"
                    id="work"
                    placeholder="Designhandz"
                    required
                    value={formData.workname}
                    onChange={handleInputChange}
                    // onChange={(e) => setWorkname(e.target.value)}
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="profession"
                  >
                    Profession?
                  </label>
                  <input
                    className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
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
                    name="min_pay"
                    value={formData.min_pay}
                    placeholder="$10/hr"
                    onChange={handleInputChange}
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
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleInputChange}
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

                <div className="flex flex-col">
                  <label>
                    Programming Languages:
                    <Select
                      options={programmingLanguages}
                      isMulti
                      value={formData.languages}
                      onChange={(selected) =>
                        setFormData({ ...formData, languages: selected })
                      }
                    />
                    {/* <Select
                      options={programmingLanguages}
                      isMulti
                      value={selectedLanguages}
                      onChange={setSelectedLanguages}
                    /> */}
                  </label>
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
                    value={formData.about}
                    onChange={(e) =>
                      setFormData({ ...formData, about: e.target.value })
                    }
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

                  <div className="flex flex-col md:flex-row gap-4 mt-2">
                    {/* Skills inputs */}
                    <input
                      className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      placeholder="Skill No 1"
                      value={formData.skills[0] || ""}
                      onChange={(e) => {
                        const newSkills = [...formData.skills];
                        newSkills[0] = e.target.value;
                        setFormData({ ...formData, skills: newSkills });
                      }}
                      required
                      aria-required="true"
                    />

                    <input
                      className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      placeholder="Skill No 2"
                      value={formData.skills[1] || ""}
                      onChange={(e) => {
                        const newSkills = [...formData.skills];
                        newSkills[1] = e.target.value;
                        setFormData({ ...formData, skills: newSkills });
                      }}
                      required
                      aria-required="true"
                    />

                    <input
                      className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      placeholder="Skill No 3"
                      value={formData.skills[2] || ""}
                      onChange={(e) => {
                        const newSkills = [...formData.skills];
                        newSkills[2] = e.target.value;
                        setFormData({ ...formData, skills: newSkills });
                      }}
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-3">
              <button
                disabled={loading}
                type="submit"
                // onClick={() => setLoading(true)}
                className="w-full md:w-full my-5 p-5 h-12 cursor-pointer rounded-lg bg-blue-600 text-white font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="animate-spin rounded-full border-2 border-white border-t-transparent h-5 w-5"></span>
                    Loading...
                  </>
                ) : (
                  "Profile Done!"
                )}
              </button>
            </div>
            {/* </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TalentForm;
