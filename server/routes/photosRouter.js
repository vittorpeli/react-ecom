import express  from "express";
import PhotosController from "../controllers/PhotosController.js";

const photosRouter = express.Router();

photosRouter.get("/photos", PhotosController.index)
photosRouter.get("/photos/:id", PhotosController.show)
photosRouter.delete("/photos/:id", PhotosController.del)
photosRouter.post("/photos", PhotosController.store)
photosRouter.put("/photos/:id", PhotosController.update)

export default photosRouter;