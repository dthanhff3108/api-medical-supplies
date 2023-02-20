import User from "~/models/userModel";
import bcrypt from "bcrypt";
import { HttpStatusCode } from "~/utilities/statusResponse";
import { decodeAccessToken } from "~/utilities/decodeToken";
const userController = {
  // Get all user
  getAllUserInDepartment: async (req, res) => {
    try {
      const idDepartment = req.params.idDepartment;
      const users = await User.find({ department: idDepartment });
      const dataUsers = users.map((u) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role,
        username: u.username,
        position: u.position,
      }));
      res.status(HttpStatusCode.OK).json(dataUsers);
    } catch (err) {
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
  deleteStaff: async (req, res) => {
    const infoUser = req.infoUser;
    const staffId = req.params.staffId;
    try {
      const staff = await User.findOne({ _id: staffId });
      if (staff.department === infoUser.department && staff.role === "staff") {
        const userdel = await User.findOneAndDelete({ _id: staffId });
        return res.status(HttpStatusCode.OK).json(userdel);
      }
      return res
        .status(HttpStatusCode.FORBIDDEN)
        .json("Not allowed to do this action");
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
};

export default userController;
