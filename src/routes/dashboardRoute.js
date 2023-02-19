import express from "express";
import dashboardController from "~/controllers/dashboardController";

const router = express.Router();

router.get("/overview", dashboardController.getDashboardOverview);
router.get("/type", dashboardController.getDataSupplyByType);

export const dashboardRoute = router;
