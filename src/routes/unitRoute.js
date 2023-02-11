import express from "express";
import unitController from "~/controllers/unitController";
const router = express.Router();

router.get("/", unitController.getListUnit);
router.post("/", unitController.createNewUnit);

export const unitRoute = router;
