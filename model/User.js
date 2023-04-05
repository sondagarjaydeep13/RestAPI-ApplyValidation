const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return validator.isAlpha(value);
      },
      message: "Invalid username",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: "Invalid email",
    },
  },
  phoneno: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return validator.isMobilePhone(value, ["en-IN"]);
      },
      message: "Invalid mobile number",
    },
  },
  password: {
    type: String,
    require: true,
    validate: {
      validator: function (value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
          value
        );
      },
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long",
    },
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
