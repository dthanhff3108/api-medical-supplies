import express from "express";
import historyImportController from "~/controllers/historyImportController";

const router = express.Router();

router.get("/", historyImportController.getAllHistoryImport);
// router.post("/", verifyTokenAndAdminAuth, userController.deleteUser);
export const historyImportRoute = router;
