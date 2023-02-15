import jwt from "jsonwebtoken";
export const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
      department: user.department,
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
      id: user.id,
      role: user.role,
      department: user.department,
    },
    "reservekey",
    {
      expiresIn: "356d",
    }
  );
};
