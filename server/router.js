import express from "express";

import './controllers/PhotosController.js'
import PhotosController from "./controllers/PhotosController.js";

const router = express.Router();

router.get("/photos", PhotosController.index)

export default router;