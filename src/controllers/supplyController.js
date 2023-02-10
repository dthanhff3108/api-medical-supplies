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
    console.log(options);
    const sortQuery =
      options.sortBy && options.sortBy === "asc"
        ? 1
        : options.sortBy && options.sortBy === "desc"
        ? -1
        : 0;
    const offsetPage = options.page ? Number(options.page) * 10 : 0;
    try {
      const listSupply = await Supply.find(options)
        .sort({
          createdAt: sortQuery,
        })
        .skip(offsetPage)
        .limit(10);
      console.log(listSupply.length);
      res.status(HttpStatusCode.OK).json(listSupply);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },

  // Search Supply
  searchSupply: async (req, res) => {
    try {
      const { q } = req.query;
      const listSupply = await Supply.find({
        name: { $regex: q, $options: "i" },
      });
      res.status(HttpStatusCode.OK).json(listSupply);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
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
      console.log(err);
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
  // rtesst Supply
  testPopulate: async (req, res) => {
    try {
      const id = req.params.id;
      const moreInfo = await Supply.findOne({ _id: id }).populate({
        path: "supplier",
        match: { phone: { $lte: 112111627371 } },
        select: "name",
      });
      res.status(HttpStatusCode.OK).json(moreInfo);
    } catch (err) {
      console.log(err);
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
};

export default supplyController;
