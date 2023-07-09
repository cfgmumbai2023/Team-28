const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    
})
const courseModel = mongoose.model("users", courseSchema);

module.exports = courseModel;
