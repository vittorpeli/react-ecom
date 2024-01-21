import express from 'express';
import PhotosController from "./controllers/PhotosController.js";
import StripeController from "./controllers/StripeController.js";


const router = express.Router();

router.get("/photos", PhotosController.index)

router.post("/create-checkout-session", StripeController.createCheckoutSession)

export default router;