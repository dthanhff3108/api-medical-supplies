import Supply from "~/models/supplyModel";
import { HttpStatusCode } from "~/utilities/statusResponse";
import { pickQuery } from "~/utilities/functionsHelper";
const supplyController = {
  // Get All Supply
  getAllSupply: async (req, res) => {
    const options = pickQuery(req.query, [
      "dangerLevel",
      "type",
      "page",
      "sortBy",
    ]);
    const sortQuery =
      options.sortBy && options.sortBy === "asc"
        ? 1
        : options.sortBy && options.sortBy === "desc"
        ? -1
        : 1;
    const offsetPage =
      options.page == "1" ? 0 : (Number(options.page) - 1) * 10;
    try {
      const listSupply = await Supply.find(options)
        .sort({
          createdAt: sortQuery,
        })
        .skip(offsetPage)
        .limit(10);

      const listSupplyNotPagination = await Supply.find(options)
        .sort({
          createdAt: sortQuery,
        })
        .limit(0);
      res.status(HttpStatusCode.OK).json({
        data: listSupply,
        total: listSupplyNotPagination.length,
      });
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // Get All Supply Disbled Pagination
  getAllSupplyDisabledPagination: async (req, res) => {
    try {
      const listAllSupplyDisabledPagination = await Supply.find({});
      res.status(HttpStatusCode.OK).json(listAllSupplyDisabledPagination);
    } catch (e) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json("Server error");
    }
  },
  // Create new Supply
  createSupply: async (req, res) => {
    try {
      const newSupply = new Supply({
        ...req.body,
      });
      const supply = await newSupply.save();
      res.status(HttpStatusCode.OK).json(supply);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // Update Supply
  updateSupply: async (req, res) => {
    try {
      const { id, ...rest } = req.body;
      const updateSupply = await Supply.findByIdAndUpdate(id, rest, {
        new: true,
      });
      res.status(HttpStatusCode.OK).json(updateSupply);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // delete Supply
  deleteSupply: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedSupply = await Supply.findByIdAndDelete({ _id: id });
      res.status(HttpStatusCode.OK).json(deletedSupply);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
};

export default supplyController;
