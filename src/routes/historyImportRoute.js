import express from "express";
import historyImportController from "~/controllers/historyImportController";
import { verifyToken } from "~/middleware/verifyToken";

const router = express.Router();

router.get("/", verifyToken, historyImportController.getAllHistoryImport);
// router.post("/", verifyTokenAndAdminAuth, userController.deleteUser);
export const historyImportRoute = router;
