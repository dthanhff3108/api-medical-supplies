import Unit from "~/models/unitModel";
import { pickQuery } from "~/utilities/functionsHelper";
import { handleErrorResponse } from "~/utilities/handleError";
import { HttpStatusCode } from "~/utilities/statusResponse";
const unitController = {
  createNewUnit: async (req, res, next) => {
    try {
      const unitData = new Unit(req.body);
      const newUnit = await unitData.save();
      res.status(HttpStatusCode.OK).json(newUnit);
    } catch (err) {
      handleErrorResponse(res, err, "Unit");
    }
  },
  // GET LIST UNIT
  getListUnit: async (req, res) => {
    try {
      const options = pickQuery(req.query, ["page", "search", "sort"]);
      const sortQuery =
        options.sort && options.sort === "asc"
          ? 1
          : options.sort && options.sort === "desc"
          ? -1
          : 1;
      const offsetPage = options.page ? Number(options.page) * 10 : 0;
      const listUnit = await Unit.find({})
        .sort({
          createdAt: sortQuery,
        })
        .skip(offsetPage)
        .limit(10);
      res.status(HttpStatusCode.OK).json(listUnit);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json("Server Error");
    }
  },
  // DELETE AN UNIT
  deleteUnit: async (req, res) => {
    try {
      const idUnit = req.params.idUnit;
      const del = await Unit.findByIdAndDelete(idUnit);
      return res.status(HttpStatusCode.OK).json(del);
    } catch (err) {
      handleErrorResponse(res, err, "Unit");
    }
  },
};

export default unitController;
