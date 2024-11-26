import express from "express";
const router = express.Router();
import reservationForm from "../controller/reservation-controller.js";

router.route("/send").post(reservationForm);

// Export router (optional)
export default router;
