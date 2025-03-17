import { useState } from "react";

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    wallet_address: "",
    fullname: "",
    work_name: "",
    about: "",
    min_pay: "",
    time_zone: "",
    languages: [],
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Retrieve additional data from localStorage
      const storedData =
        JSON.parse(localStorage.getItem("userPreferences")) || {};

      // Merge form data with localStorage data
      const userData = {
        ...formData,
        min_pay: Number(formData.min_pay), // Ensure it's a number
        languages: formData.languages.split(","), // Convert string to array
        skills: formData.skills.split(","), // Convert string to array
        ...storedData,
      };

      // Send request to API
      const response = await fetch("https://your-api.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const result = await response.json();
      console.log("User registered successfully:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullname"
        placeholder="Full Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="work_name"
        placeholder="Work Name"
        onChange={handleChange}
      />
      <textarea
        name="about"
        placeholder="About"
        onChange={handleChange}
      ></textarea>
      <input
        type="number"
        name="min_pay"
        placeholder="Minimum Pay"
        onChange={handleChange}
      />
      <input
        type="text"
        name="time_zone"
        placeholder="Time Zone"
        onChange={handleChange}
      />
      <input
        type="text"
        name="languages"
        placeholder="Languages (comma-separated)"
        onChange={handleChange}
      />
      <input
        type="text"
        name="skills"
        placeholder="Skills (comma-separated)"
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterUser;
