import express from 'express';
import PhotosController from "./controllers/PhotosController.js";
import StripeController from "./controllers/StripeController.js";

const router = express.Router();

router.get("/photos", PhotosController.index)
router.get("/photos/:id", PhotosController.show)
router.delete("/photos/:id", PhotosController.del)
router.post("/photos", PhotosController.store)
router.put("/photos/:id", PhotosController.update)

router.post("/create-checkout-session", StripeController.createCheckoutSession)

export default router;