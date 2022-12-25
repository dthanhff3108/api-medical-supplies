import User from "~/models/userModel";
import { HttpStatusCode } from "~/utilities/statusResponse";
const userController = {
  // Get all user
  getAllUser: async (req, res) => {
    try {
      const users = await User.find();
      res.status(HttpStatusCode.OK).json(users);
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
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
  // tesst user
  // testUser: async (req, res) => {
  //   try {
  //     const user = await (await User.findById(req.params.id))
  //       .populated("department")
  //       .exac((_, value) => {
  //         console.log(value);
  //       });
  //     res.status(HttpStatusCode.OK).json(user);
  //   } catch (err) {
  //     res.status(HttpStatusCode.INTERNAL_SERVER).json({
  //       message: err,
  //     });
  //   }
  // },
};

export default userController;
