import Department from "~/models/DepartmentModel";
import User from "~/models/userModel";
import { HttpStatusCode } from "~/utilities/statusResponse";
const departmentController = {
  // Get All Department
  getAllDepartment: async (req, res) => {
    try {
      const listDepartment = await Department.find({});
      res.status(HttpStatusCode.OK).json(listDepartment);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // Get One Department
  getOneDepartment: async (req, res) => {
    try {
      const id = req.params.id;
      const detailDepartment = await Department.findById(id);
      res.status(HttpStatusCode.OK).json(detailDepartment);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // Search Department
  searchDepartment: async (req, res) => {
    try {
      const { q } = req.query;
      const listDepartment = await Department.find({
        name: { $regex: q, $options: "i" },
      });
      res.status(HttpStatusCode.OK).json(listDepartment);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // Create new Department
  createDepartment: async (req, res) => {
    try {
      const newDepartment = new Department({
        ...req.body,
      });
      const department = await newDepartment.save();
      res.status(HttpStatusCode.OK).json(department);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // Update Department
  updateDepartment: async (req, res) => {
    try {
      const { id, ...rest } = req.body;
      const updateDepartment = await Department.findByIdAndUpdate(id, rest, {
        new: true,
      });
      res.status(HttpStatusCode.OK).json(updateDepartment);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // delete Department
  deleteDepartment: async (req, res) => {
    try {
      const id = req.params.id;
      await User.updateMany({ department: id }, { department: null });
      const deletedDepartment = await Department.findByIdAndDelete({ _id: id });
      res.status(HttpStatusCode.OK).json(deletedDepartment);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
};

export default departmentController;
