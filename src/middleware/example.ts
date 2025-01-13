
import { defineMiddleware } from "astro/middleware";

export const validate = defineMiddleware((_context, next) => {
  console.log("In validate middleware");
  return next();
});
