import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
      const newUser = await new User({
        ...req.body,
        password: hashedPassword,
      });
      const user = await newUser.save();
      return res.status(HttpStatusCode.OK).json(user);
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(HttpStatusCode.NOT_FOUND).json("Invalid");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(HttpStatusCode.NOT_FOUND).json("Invalid");
      }
      if (user && validPassword) {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          path: "/",
          sameSite: "strict",
        });
        const { password, ...infoUser } = user._doc;
        return res.status(HttpStatusCode.OK).json({ ...infoUser, accessToken });
      }
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        message: err,
      });
    }
  },
  requestRefreshToken: async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    console.log(refreshToken);
  },
};

export default authController;
