import jwt from "jsonwebtoken";
import { HttpStatusCode } from "~/utilities/statusResponse";

export const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, "accesskey", (err, infoUser) => {
      if (err) {
        return res.status(HttpStatusCode.BAD_REQUEST).json(err);
      }
      //Add info token to req
      req.user = infoUser;
      next();
    });
  } else {
    return res.status(HttpStatusCode.UNAUTHORIZED).json("Unauthenticated");
  }
};

export const verifyTokenAndAdminAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.admin) {
      next();
    } else {
      return res.status(HttpStatusCode.UNAUTHORIZED).json("Not allowed");
    }
  });
};
