const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb+srv://abhi:kings11punjab@cluster0.uhrq4q3.mongodb.net/coursera-app");

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastname: String
});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastname: String
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageurl: String,
    creatorid: { type: Schema.Types.ObjectId }
});

const purchaseSchema = new Schema({
    userId: { type: Schema.Types.ObjectId },
    courseId: { type: Schema.Types.ObjectId }
});

const userModel = mongoose.model("User", userSchema);
const adminModel = mongoose.model("Admin", adminSchema);
const courseModel = mongoose.model("Course", courseSchema);
const purchaseModel = mongoose.model("Purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};
