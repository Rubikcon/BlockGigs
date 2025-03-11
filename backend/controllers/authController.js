import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const register = async (req, res) => {
  const { name, email, password, wallet_address } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password, wallet_address });

  await user.save();
  res.send("User registered successfully");
};

const login = async (req, res) => {
  const { email, password, wallet_address } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send("Invalid email or password");
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).send("Invalid password");
  }

  const token = jwt.sign({ userId: user._id }, "secretkey");
  res.send({ token });
};

export { register, login };
