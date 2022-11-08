import express from "express";
import authController from "~/controllers/authController";
import { verifyToken } from "~/middleware/verifyToken";
import authValidation from "~/validations/authValidation";
const router = express.Router();

router.post(
  "/register",
  authValidation.registerUser,
  authController.registerUser
);

router.post("/login", authController.loginUser);
router.post("/refresh", authController.requestRefreshToken);
router.post("/logout", verifyToken, authController.logoutUser);

export const authRoute = router;
