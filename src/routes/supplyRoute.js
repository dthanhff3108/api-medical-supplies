import express from "express";
import supplyController from "~/controllers/supplyController";
import { verifyTokenManagement, verifyToken } from "~/middleware/verifyToken";
const router = express.Router();

router.get("/", verifyTokenManagement, supplyController.getAllSupply);
router.get("/all", supplyController.getAllSupplyDisabledPagination);
router.post("/", verifyTokenManagement, supplyController.createSupply);
router.patch("/", verifyTokenManagement, supplyController.updateSupply);
router.delete("/:id", verifyTokenManagement, supplyController.deleteSupply);

export const supplyRoute = router;
