import express from "express";
import supplyController from "~/controllers/supplyController";
const router = express.Router();

router.get("/", supplyController.getAllSupply);
router.get("/search", supplyController.searchSupply);
router.post("/", supplyController.createSupply);
router.patch("/", supplyController.updateSupply);
router.delete("/:id", supplyController.deleteSupply);
router.get("/test/:id", supplyController.testPopulate);

export const supplyRoute = router;
