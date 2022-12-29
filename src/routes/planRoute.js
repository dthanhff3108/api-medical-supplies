import express from "express";
import planController from "~/controllers/planController";

const router = express.Router();

router.post("/", planController.createPlan);
export const planRoute = router;
