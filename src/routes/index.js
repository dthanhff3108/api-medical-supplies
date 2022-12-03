import express from "express";
import { authRoute } from "./authRoute";
import { departmentRoute } from "./departmentRoute";
import { historyImportRoute } from "./historyImportRoute";
import { supplierRoute } from "./supplierRoute";
import { suppluRoute } from "./supplyRoute";
const router = express.Router();

router.get("/status", (req, res) => res.json("OK"));
router.use("/auth", authRoute);
router.use("/supply", suppluRoute);
router.use("/department", departmentRoute);
router.use("/supplier", supplierRoute);
router.use("/history/import", historyImportRoute);

export const apiV1 = router;
