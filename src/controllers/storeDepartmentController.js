import StoreDepartment from "~/models/storeDepartmentModel";
import { HttpStatusCode } from "~/utilities/statusResponse";
import { convertQuery } from "~/utilities/functionsHelper";
const storeDepartmentController = {
  //  Get data store
  getDataStore: async (req, res) => {
    try {
      const idDepartment = req.params.idDepartment.split("&")[0];
      const options = convertQuery(req.params.idDepartment.split("&").slice(1));
      const sortQuery =
        options.sortBy && options.sortBy === "asc"
          ? 1
          : options.sortBy && options.sortBy === "desc"
          ? -1
          : 1;
      const offsetPage =
        options.page == "1" ? 0 : (Number(options.page) - 1) * 10;
      const dataStoreDepartment = await StoreDepartment.findOne({
        ...options,
        idDepartment,
      })
        .sort({
          createdAt: sortQuery,
        })
        .skip(offsetPage)
        .limit(10);
      res.status(HttpStatusCode.OK).json(dataStoreDepartment);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json("Server Error");
    }
  },
};

export default storeDepartmentController;
