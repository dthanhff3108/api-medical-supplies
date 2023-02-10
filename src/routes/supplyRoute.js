import express from "express";
import supplyController from "~/controllers/supplyController";
const router = express.Router();

router.get("/", supplyController.getAllSupply);
router.post("/", supplyController.createSupply);
router.patch("/", supplyController.updateSupply);
router.delete("/:id", supplyController.deleteSupply);

export const supplyRoute = router;
