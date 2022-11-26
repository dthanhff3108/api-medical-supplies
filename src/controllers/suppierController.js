import Supplier from "~/models/supplierModel";
import { HttpStatusCode } from "~/utilities/statusResponse";
const suppierController = {
  // Get All Supplier
  getAllSupplier: async (req, res) => {
    try {
      const listSupplier = await Supplier.find({});
      res.status(HttpStatusCode.OK).json(listSupplier);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // Get One Supplier
  getOneSupplier: async (req, res) => {
    try {
      const id = req.params.id;
      const detailSupplier = await Supplier.findById(id);
      res.status(HttpStatusCode.OK).json(detailSupplier);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // Create new Supplier
  createSupplier: async (req, res) => {
    try {
      const newSupplier = new Supplier({
        ...req.body,
      });
      const supplier = await newSupplier.save();
      res.status(HttpStatusCode.OK).json(supplier);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // Update Supplier
  updateSupplier: async (req, res) => {
    try {
      const { id, ...rest } = req.body;
      const updateSupplier = await Supplier.findByIdAndUpdate(id, rest, {
        new: true,
      });
      res.status(HttpStatusCode.OK).json(updateSupplier);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // delete Supplier
  deleteSupplier: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedSupplier = await Supplier.findByIdAndDelete({ _id: id });
      res.status(HttpStatusCode.OK).json(deletedSupplier);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
};

export default suppierController;
