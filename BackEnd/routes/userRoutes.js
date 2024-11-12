const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register user
router.post("/register", async (req, res) => {
   try {
      const newUser = new User(req.body);
      const user = await newUser.save();
      res.json(user);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

// Login user
router.post("/login", async (req, res) => {
   try {
      const user = await User.findOne({ email: req.body.email });
      if (user && user.password === req.body.password) {
         res.json(user);
      } else {
         res.status(400).json({ message: "Invalid credentials" });
      }
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

module.exports = router;
