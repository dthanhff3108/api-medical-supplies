import User from "~/models/userModel";
import Department from "~/models/DepartmentModel";
import bcrypt from "bcrypt";
import { HttpStatusCode } from "~/utilities/statusResponse";
const userController = {
  // Get all user
  getAllUserInDepartment: async (req, res) => {
    try {
      const idDepartment = req.params.idDepartment;
      const users = await User.find({ department: idDepartment });
      const dataUsers = users.map((u) => ({
        name: u.name,
        email: u.email,
        id: u.id,
      }));
      res.status(HttpStatusCode.OK).json(dataUsers);
    } catch (err) {
      console.log(err);
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  createNewUser: async (req, res) => {
    try {
      const idDepartment = req.params.idDepartment;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const checkUsername = await User.find({ username: req.body.username });
      if (checkUsername.length > 0) {
        return res
          .status(HttpStatusCode.INTERNAL_SERVER)
          .json("Username already taken");
      }
      const checkEmail = await User.find({ email: req.body.email });
      if (checkEmail.length > 0) {
        return res
          .status(HttpStatusCode.INTERNAL_SERVER)
          .json("Email already taken");
      }

      const newUser = new User({
        ...req.body,
        password: hashedPassword,
        role: "staff",
        department: idDepartment,
      });
      const user = await newUser.save();
      return res.status(HttpStatusCode.OK).json(user);
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  // Delete user
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(HttpStatusCode.OK).json(user);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
};

export default userController;
