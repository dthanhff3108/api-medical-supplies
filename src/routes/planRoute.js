import express from "express";
import planController from "~/controllers/planController";

const router = express.Router();

router.post("/", planController.createPlan);
router.get("/monthly", planController.getMonthlyPlan);

export const planRoute = router;
