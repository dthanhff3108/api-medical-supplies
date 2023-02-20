import jwt from "jsonwebtoken";
import { HttpStatusCode } from "~/utilities/statusResponse";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, "accesskey", (err, infoUser) => {
      if (err) {
        return res.status(HttpStatusCode.UNAUTHORIZED).json("Token expired");
      }
      req.infoUser = infoUser;
      next();
    });
  } else {
    return res.status(HttpStatusCode.UNAUTHORIZED).json("Unauthenticated");
  }
};

export const verifyTokenManagement = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.infoUser.role === "management") {
      next();
    } else {
      return res.status(HttpStatusCode.UNAUTHORIZED).json("Not allowed ");
    }
  });
};
