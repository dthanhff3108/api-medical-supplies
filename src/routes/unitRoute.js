import express from "express";
import unitController from "~/controllers/unitController";
const router = express.Router();

router.get("/", unitController.getListUnit);
router.get("/all", unitController.getListAllUnit);
router.post("/", unitController.createNewUnit);
router.delete("/:idUnit", unitController.deleteUnit);
export const unitRoute = router;
