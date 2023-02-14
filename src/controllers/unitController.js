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
      const offsetPage =
        options.page == "1" ? 0 : (Number(options.page) - 1) * 10;
      const listUnit = await Unit.find({})
        .sort({
          createdAt: sortQuery,
        })
        .skip(offsetPage)
        .limit(10);
      const listUnitNotPagination = await Unit.find(options)
        .sort({
          createdAt: sortQuery,
        })
        .limit(0);
      res.status(HttpStatusCode.OK).json({
        data: listUnit,
        total: listUnitNotPagination.length,
      });
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json("Server Error");
    }
  },
  // Get ALL UNIT
  getListAllUnit: async (req, res) => {
    try {
      const allUnit = await Unit.find({});
      res.status(HttpStatusCode.OK).json(allUnit);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json("Server Error");
    }
  },
  // DELETE AN UNIT
  deleteUnit: async (req, res) => {
    try {
      const idUnit = req.params.idUnit;
      await Unit.findByIdAndDelete(idUnit);
      return res.status(HttpStatusCode.OK).json();
    } catch (err) {
      handleErrorResponse(res, err, "Unit");
    }
  },
};

export default unitController;
