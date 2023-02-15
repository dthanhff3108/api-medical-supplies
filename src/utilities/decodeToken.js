import jwt from "jsonwebtoken";

export const decodeAccessToken = (token) => {
  return jwt.verify(token, "accesskey", function (err, decoded) {
    if (err) {
      err = {
        name: "TokenExpiredError",
        message: "jwt expired",
        expiredAt: 1408621000,
      };
      return err;
    }
    return decoded;
  });
};
