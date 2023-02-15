import StoreDepartment from "~/models/storeDepartmentModel";
import { HttpStatusCode } from "~/utilities/statusResponse";
const storeDepartmentController = {
  //  Get data store
  getDataStore: async (req, res) => {
    try {
      const idDepartment = req.params.idDepartment;
      const dataStoreDepartment = await StoreDepartment.findOne({
        idDepartment,
      });
      res.status(HttpStatusCode.OK).json(dataStoreDepartment);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json("Server Error");
    }
  },
  
};

export default storeDepartmentController;
