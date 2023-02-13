import { HttpStatusCode } from "./statusResponse";

export const handleErrorResponse = (res, err, nameModel) => {
  if (err.name === "MongoServerError") {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .json(`${nameModel} already exist`);
  } else if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    return res.status(HttpStatusCode.BAD_REQUEST).json(message[0]);
  }
  return res.status(HttpStatusCode.INTERNAL_SERVER).json({
    message: err,
  });
};
