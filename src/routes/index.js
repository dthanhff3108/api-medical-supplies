import express from "express";
import { authRoute } from "./authRoute";
import { departmentRoute } from "./departmentRoute";
import { planRoute } from "./planRoute";
import { supplierRoute } from "./supplierRoute";
import { supplyRoute } from "./supplyRoute";
const router = express.Router();

router.use("/auth", authRoute);
router.use("/supply", supplyRoute);
router.use("/department", departmentRoute);
router.use("/supplier", supplierRoute);
router.use("/plan-department", planRoute);

export const apiV1 = router;
