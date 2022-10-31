import express from "express";
import { authRoute } from "./authRoute";
import { userRoute } from "./userRoute";
const router = express.Router();

router.get("/status", (req, res) => res.json("OK"));
router.use("/auth", authRoute);
router.use("/user", userRoute);

export const apiV1 = router;
