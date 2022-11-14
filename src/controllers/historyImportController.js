import HistoryImport from "~/models/historyImportModel";
import { HttpStatusCode } from "~/utilities/statusResponse";
const historyImportController = {
  // Get ALl history
  getAllHistoryImport: async (req, res) => {
    try {
      const historyImport = await HistoryImport.find({});
      res.status(HttpStatusCode.OK).json(historyImport);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
};

export default historyImportController;
