import Client from "../models/Client.js";

// Create a new client
export const createClient = async (req, res) => {
  try {
    const { wallet_address, fullname, about, email, password } = req.body;

    // Ensure wallet address is unique
    const existingClient = await Client.findOne({ wallet_address });
    if (existingClient) {
      return res
        .status(400)
        .json({ success: false, message: "Wallet address already exists" });
    }

    const newClient = new Client({
      wallet_address,
      fullname,
      about,
      email,
      password,
    });
    await newClient.save();

    res.status(201).json({ success: true, data: newClient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all clients
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find().select("-password"); // Exclude password from response
    res.status(200).json({ success: true, data: clients });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single client by ID
export const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id).select("-password");
    if (!client)
      return res
        .status(404)
        .json({ success: false, message: "Client not found" });

    res.status(200).json({ success: true, data: client });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a client by ID
export const updateClient = async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select("-password");

    if (!updatedClient)
      return res
        .status(404)
        .json({ success: false, message: "Client not found" });

    res.status(200).json({ success: true, data: updatedClient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a client by ID
export const deleteClient = async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (!deletedClient)
      return res
        .status(404)
        .json({ success: false, message: "Client not found" });

    res
      .status(200)
      .json({ success: true, message: "Client deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
