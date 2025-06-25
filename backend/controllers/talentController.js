import Talent from "../models/Talent.js"; // Ensure correct path

// Create a new talent
// export const createTalent = async (req, res) => {
//   try {
//     const {
//       fullname,
//       work_name,
//       profession,
//       min_pay,
//       time_zone,
//       about,
//       languages,
//       skills,
//       email,
//       password,
//       wallet_address,
//       role,
//       // fullname,
//       // work_name,
//       // min_pay,
//       // time_zone,
//       // about,
//       // languages,
//       // skills,
//       // email,
//       // password,
//       // wallet_address,
//     } = req.body;

//     // Check if email or wallet_address already exists (only if provided)
//     if (email) {
//       const existingTalent = await Talent.findOne({ email });
//       if (existingTalent)
//         return res.status(400).json({ message: "Email already in use" });
//     }

//     if (wallet_address) {
//       const existingWallet = await Talent.findOne({ wallet_address });
//       if (existingWallet)
//         return res
//           .status(400)
//           .json({ message: "Wallet address already in use" });
//     }

//     console.log("Incoming body", req.body);
//     console.log("REQ BODY", req.body);
//     console.log("CREATING TALENT WITH", { fullname, work_name, time_zone });
//     // Create the talent entry
//     const talent = new Talent({
//       // fullname,
//       // work_name,
//       // min_pay,
//       // time_zone,
//       // about,
//       // languages,
//       // skills,
//       // email,
//       // password,
//       // wallet_address,
//       fullname,
//       work_name,
//       profession,
//       min_pay,
//       time_zone,
//       about,
//       languages,
//       skills,
//       email,
//       password,
//       wallet_address,
//       role,
//     });

//     await talent.save();
//     res.status(201).json({ message: "Talent created successfully", talent });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// Get all talents
export const getTalents = async (req, res) => {
  try {
    const talents = await Talent.find();
    res.status(200).json(talents);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a single talent by ID
export const getTalentById = async (req, res) => {
  try {
    const talent = await Talent.findById(req.params.id);
    if (!talent) return res.status(404).json({ message: "Talent not found" });

    res.status(200).json(talent);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update a talent
export const updateTalent = async (req, res) => {
  try {
    const { email, wallet_address } = req.body;

    // Ensure email and wallet are not used by another talent (if provided)
    if (email) {
      const existingTalent = await Talent.findOne({
        email,
        _id: { $ne: req.params.id },
      });
      if (existingTalent)
        return res.status(400).json({ message: "Email already in use" });
    }

    if (wallet_address) {
      const existingWallet = await Talent.findOne({
        wallet_address,
        _id: { $ne: req.params.id },
      });
      if (existingWallet)
        return res
          .status(400)
          .json({ message: "Wallet address already in use" });
    }

    const updatedTalent = await Talent.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTalent)
      return res.status(404).json({ message: "Talent not found" });

    res
      .status(200)
      .json({ message: "Talent updated successfully", updatedTalent });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a talent
export const deleteTalent = async (req, res) => {
  try {
    const deletedTalent = await Talent.findByIdAndDelete(req.params.id);
    if (!deletedTalent)
      return res.status(404).json({ message: "Talent not found" });

    res.status(200).json({ message: "Talent deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
