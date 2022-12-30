import Plan from "~/models/planModel";
import { HttpStatusCode } from "~/utilities/statusResponse";
const planImportController = {
  createPlan: async (req, res) => {
    try {
      const planData = new Plan(req.body);
      const newPlan = await planData.save();
      res.status(HttpStatusCode.OK).json(newPlan);
    } catch (err) {
      console.log(err);
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
};

export default planImportController;