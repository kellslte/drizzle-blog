import Joi from "joi";

export const LoginRequest = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
