import express from "express";
import authController from "~/controllers/authController";
import authValidation from "~/validations/authValidation";
const router = express.Router();

router.post(
  "/register",
  authValidation.registerUser,
  authController.registerUser
);

router.post("/login", authController.loginUser);
router.post("/refresh", authController.requestRefreshToken);

export const authRoute = router;
