import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Department from "~/models/DepartmentModel";
import User from "~/models/userModel";
import {
  generateAccessToken,
  generateRefreshToken,
} from "~/utilities/generateToken";
import { HttpStatusCode } from "~/utilities/statusResponse";
const authController = {
  registerUser: async (req, res) => {
    try {
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

      const dataCreateUser = { ...req.body };
      if (req.body.role === "department") {
        dataCreateUser.role === "owner";
      }
      const newUser = new User({
        ...dataCreateUser,
        password: hashedPassword,
      });

      const user = await newUser.save();
      await Department.findOneAndUpdate(user.department, {
        owner: user._id,
      });
      return res.status(HttpStatusCode.OK).json(user);
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json();
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res
          .status(HttpStatusCode.NOT_FOUND)
          .send("Username or password is incorrect");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res
          .status(HttpStatusCode.NOT_FOUND)
          .json("Password is incorrect");
      }
      if (user && validPassword) {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        const { password, ...other } = user._doc;
        return res
          .status(HttpStatusCode.OK)
          .json({ ...other, accessToken, refreshToken });
      }
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },

  // REFRESH TOKEN
  requestRefreshToken: async (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
      return res
        .status(HttpStatusCode.UNAUTHORIZED)
        .json("You Are Not authenticated");
    }
    jwt.verify(refreshToken, "reservekey", (err, infoUser) => {
      if (err) {
        return res
          .status(HttpStatusCode.UNAUTHORIZED)
          .json("You Are Not authenticated");
      }
      // Create new access Token
      const newAccessToken = generateAccessToken(infoUser);
      const newRefreshToken = generateRefreshToken(infoUser);
      return res
        .status(HttpStatusCode.OK)
        .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
    });
  },
  // LOGOUT
  logoutUser: async (req, res) => {
    // Delete accessToken in FE
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    return res.status(HttpStatusCode.OK).json("Logout success");
  },
};

export default authController;
