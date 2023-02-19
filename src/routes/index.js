import express from "express";
import { authRoute } from "./authRoute";
import { departmentRoute } from "./departmentRoute";
import { planRoute } from "./planRoute";
import { supplierRoute } from "./supplierRoute";
import { supplyRoute } from "./supplyRoute";
import { userRoute } from "./userRoute";
import { unitRoute } from "./unitRoute";
import { storeDepartmentRoute } from "./storeDepartmentRoute";
import { dashboardRoute } from "./dashboardRoute";
const router = express.Router();

router.use("/auth", authRoute);
router.use("/supply", supplyRoute);
router.use("/department", departmentRoute);
router.use("/user", userRoute);
router.use("/supplier", supplierRoute);
router.use("/plan-department", planRoute);
router.use("/unit", unitRoute);
router.use("/store-department", storeDepartmentRoute);
router.use("/dashboard", dashboardRoute);

export const apiV1 = router;
