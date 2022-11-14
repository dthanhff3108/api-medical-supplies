import express from "express";
import { authRoute } from "./authRoute";
import { historyImportRoute } from "./historyImportRoute";
import { suppluRoute } from "./supplyRoute";
import { userRoute } from "./userRoute";
const router = express.Router();

router.get("/status", (req, res) => res.json("OK"));
router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/supply", suppluRoute);
router.use("/history/import", historyImportRoute);

export const apiV1 = router;
