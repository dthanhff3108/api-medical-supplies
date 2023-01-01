import express from "express";
import planController from "~/controllers/planController";

const router = express.Router();

router.post("/", planController.createPlan);
router.get("/", planController.getAllPlan);
router.post("/issue", planController.sendIssue);
router.get("/issue/:id", planController.getIssue);

export const planRoute = router;
