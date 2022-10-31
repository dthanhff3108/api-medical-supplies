import express from "express";
import userController from "~/controllers/userController";
import { verifyToken, verifyTokenAndAdminAuth } from "~/middleware/verifyToken";

const router = express.Router();

router.get("/", verifyToken, userController.getAllUser);
router.delete("/:id", verifyTokenAndAdminAuth, userController.deleteUser);
export const userRoute = router;
