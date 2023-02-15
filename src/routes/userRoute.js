import express from "express";
import userController from "~/controllers/userController";
import { verifyToken } from "~/middleware/verifyToken";
const router = express.Router();

// router.get("/", userController.getAlluser);
// router.get("/search", userController.searchuser);
router.post("/:idDepartment", userController.createNewUser);
router.get(
  "/:idDepartment",
  verifyToken,
  userController.getAllUserInDepartment
);
// router.patch("/", userController.updateuser);
router.delete("/:idDepartment", userController.deleteStaff);

export const userRoute = router;
