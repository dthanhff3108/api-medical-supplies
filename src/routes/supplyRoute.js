import express from "express";
import supplyController from "~/controllers/supplyController";
const router = express.Router();

router.get("/", supplyController.getAllSupply);
router.get("/search", supplyController.searchSupply);
router.get("/:id", supplyController.getOneSupply);
router.post("/", supplyController.createSupply);
router.patch("/", supplyController.updateSupply);
router.delete("/:id", supplyController.deleteSupply);

export const suppluRoute = router;
