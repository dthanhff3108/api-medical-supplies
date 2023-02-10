import express from "express";
import userController from "~/controllers/userController";
const router = express.Router();

// router.get("/", userController.getAlluser);
// router.get("/search", userController.searchuser);
router.post("/:idDepartment", userController.createNewUser);
router.get("/:idDepartment", userController.getAllUserInDepartment);
// router.patch("/", userController.updateuser);
router.delete("/:idDepartment", userController.deleteStaff);

export const userRoute = router;
