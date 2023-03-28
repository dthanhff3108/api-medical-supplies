import Issue from "~/models/issueModel";
import Plan from "~/models/planModel";
import { HttpStatusCode } from "~/utilities/statusResponse";
const planImportController = {
  createPlan: async (req, res) => {
    try {
      const planData = new Plan(req.body);
      const newPlan = await planData.save();
      res.status(HttpStatusCode.OK).json(newPlan);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json("Server Error");
    }
  },
  getMonthlyPlan: async (req, res) => {
    try {
      const listPlan = await Plan.find({ planType: 3 }).populate("Department", [
        "name",
        "email",
      ]);
      res.status(HttpStatusCode.OK).json(listPlan);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json("Server Error");
    }
  },
};

export default planImportController;
