import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    minlength: [3, 'First Name should have a minimum of 3 characters'],
    maxlength: [20, 'First Name cannot exceed 20 characters'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    minlength: [3, 'Last Name should have a minimum of 3 characters'],
    maxlength: [20, 'Last Name cannot exceed 20 characters'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: validator.isEmail, // Using validator's isEmail function
      message: 'Please provide a valid email address',
    },
    trim: true,
    unique: true, // Ensures no duplicate emails in the database
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true, // Removes leading and trailing spaces
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  time: {
    type: String,
    required: [true, 'Time is required'],
    trim: true,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;
