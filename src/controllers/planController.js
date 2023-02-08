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
  getAllPlan: async (req, res) => {
    try {
      const listPlan = await Plan.find({}).populate("department", "name");
      res.status(HttpStatusCode.OK).json(listPlan);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json("Server Error");
    }
  },
  sendIssue: async (req, res) => {
    try {
      const { plan } = req.body;
      const createIssue = new Issue(req.body);
      const newIssue = await createIssue.save();
      await Plan.findByIdAndDelete(plan);
      res.status(HttpStatusCode.OK).json(newIssue);
    } catch (err) {
      console.log(err);
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  getIssue: async (req, res) => {
    try {
      const { id: idDepartment } = req.params;
      const findIssue = await Issue.find({ to: idDepartment });
      res.status(HttpStatusCode.OK).json(findIssue);
    } catch (err) {
      console.log(err);
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
};

export default planImportController;
