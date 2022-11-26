import express from "express";
import suppierController from "~/controllers/suppierController";
const router = express.Router();

router.get("/", suppierController.getAllSupplier);
router.get("/:id", suppierController.getOneSupplier);
router.post("/", suppierController.createSupplier);
router.patch("/", suppierController.updateSupplier);
router.delete("/:id", suppierController.deleteSupplier);

export const supplierRoute = router;
