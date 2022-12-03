import express from "express";
import departmentController from "~/controllers/departmentController";
const router = express.Router();

router.get("/", departmentController.getAllDepartment);
router.get("/search", departmentController.searchDepartment);
router.get("/:id", departmentController.getOneDepartment);
router.post("/", departmentController.createDepartment);
router.patch("/", departmentController.updateDepartment);
router.delete("/:id", departmentController.deleteDepartment);

export const departmentRoute = router;
