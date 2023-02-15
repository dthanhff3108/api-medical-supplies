import jwt from "jsonwebtoken";
export const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      admin: user.role,
    },
    "accesskey",
    {
      expiresIn: "10s",
    }
  );
};

export const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      admin: user.role,
    },
    "reservekey",
    {
      expiresIn: "356d",
    }
  );
};
