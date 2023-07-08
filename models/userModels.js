const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  age:{
    type:Number
  },
  location:{
    type:String
  },
  YearsOfExperience:{
    type:Number
  },
  levelofCourse:{
    type:String
  },
  targetAgegroup:{
    type:String
  }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
