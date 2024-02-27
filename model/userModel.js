const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
  age: { type: Number, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null },
  deletedAt: { type: Date, default: null },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
