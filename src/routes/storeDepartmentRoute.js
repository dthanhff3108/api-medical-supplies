import express from "express";
import storeDepartmentController from "~/controllers/storeDepartmentController";

const router = express.Router();

router.get("/:idDepartment", storeDepartmentController.getDataStore);

export const storeDepartmentRoute = router;
