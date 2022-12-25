import express from "express";
import { authRoute } from "./authRoute";
import { departmentRoute } from "./departmentRoute";
import { historyImportRoute } from "./historyImportRoute";
import { supplierRoute } from "./supplierRoute";
import { supplyRoute } from "./supplyRoute";
const router = express.Router();

router.use("/auth", authRoute);
router.use("/supply", supplyRoute);
router.use("/department", departmentRoute);
router.use("/supplier", supplierRoute);
router.use("/history/import", historyImportRoute);

export const apiV1 = router;
