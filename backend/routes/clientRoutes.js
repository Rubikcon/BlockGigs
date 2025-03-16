import express from "express";
import {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";

const router = express.Router();

router.post("/", createClient); // Create a client
router.get("/", getClients); // Get all clients
router.get("/:id", getClientById); // Get a client by ID
router.put("/:id", updateClient); // Update a client
router.delete("/:id", deleteClient); // Delete a client

export default router;
