import express from "express";
import departmentController from "~/controllers/departmentController";
import { verifyTokenManagement } from "~/middleware/verifyToken";
const router = express.Router();

router.get("/", departmentController.getAllDepartment);
router.get(
  "/search",
  verifyTokenManagement,
  departmentController.searchDepartment
);
router.get(
  "/:id",
  verifyTokenManagement,
  departmentController.getOneDepartment
);
router.post("/", verifyTokenManagement, departmentController.createDepartment);
router.patch("/", verifyTokenManagement, departmentController.updateDepartment);
router.delete(
  "/:id",
  verifyTokenManagement,
  departmentController.deleteDepartment
);

export const departmentRoute = router;
