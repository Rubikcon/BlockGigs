import express from "express";

const router = express.Router();

const authenticate = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("Access denied");
  }
  try {
    const decoded = jwt.verify(token, "secretkey");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

router.get("/protected", authenticate, (req, res) => {
  res.send("Welcome to the protected route!");
});

export default router;
