import { type Request } from "express";
import { type Schema } from "joi";

export default function requestValidator(
  schema: Schema,
  request: Request["body"]
) {
  const { error } = schema.validate(request, { abortEarly: false });

  return error
    ? {
        errors: error.details.map(({ context, message }) => ({
          key: context?.key,
          message,
        })),
      }
    : { value: request };
}
