import Supply from "~/models/supplyModel";
import { HttpStatusCode } from "~/utilities/statusResponse";
const supplyController = {
  // Get All Supply
  getAllSupply: async (req, res) => {
    try {
      const listSupply = await Supply.find({});
      res.status(HttpStatusCode.OK).json(listSupply);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // Get One Supply
  getOneSupply: async (req, res) => {
    try {
      const id = req.params.id;
      const detailSupply = await Supply.findById(id);
      res.status(HttpStatusCode.OK).json(detailSupply);
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
