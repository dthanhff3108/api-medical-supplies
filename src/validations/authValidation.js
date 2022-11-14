import Joi from "joi";
import { HttpStatusCode } from "~/utilities/statusResponse";

const authValidation = {
  registerUser: async (req, res, next) => {
    const condition = Joi.object({
      username: Joi.string().required().min(6).max(20),
      email: Joi.string().required().min(5).max(40),
      password: Joi.string().required().min(6),
      admin: Joi.boolean(),
    });
    try {
      await condition.validateAsync(req.body, { abortEarly: true });
      next();
    } catch (err) {
      res.status(HttpStatusCode.BAD_REQUEST).json({
        errors: new Error(err).message,
      });
    }
  },
};

export default authValidation;
