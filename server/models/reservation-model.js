import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "First Name should have a minimum of 3 characters"],
    maxlength: [20, "First Name cannot exceed 20 characters"],
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, "Last Name should have a minimum of 3 characters"],
    maxlength: [20, "Last Name cannot exceed 20 characters"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email address"],
    trim: true,
    unique: true, // Ensures no duplicate emails in the database
  },
  phone: {
    type: String,
    required: true,
    minlength: [10, "Phone should be of Minimum 10 Digit "],
    maxlength: [10, "Phone should be of Minimum 10 Digit"],
    trim: true, // Removes leading and trailing spaces
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;
