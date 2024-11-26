import ErrorHandler from '../error/error.js'; // Correct import for ErrorHandler
import Reservation from '../models/reservation-model.js'; // Correct import for Reservation model

const reservationForm = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body; // Destructure input from request body

  // Check if all fields are provided
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill the full reservation form!", 400));
  }

  try {
    // Create a new reservation entry in the database
    await Reservation.create({ firstName, lastName, email, phone, date, time });

    // Send success response
    return res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle validation errors specifically Object.values(error.errors)  extracts the error message from each validation error and puts them in an array while return the error messages from the validation errors into a single string, joined by commas
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );

      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    // Pass any other errors to the error middleware
    return next(error);
  }
};

export default reservationForm;
