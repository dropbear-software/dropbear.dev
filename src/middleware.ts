import { sequence } from "astro:middleware";
import { validate } from "./middleware/example.js";

export const onRequest = sequence(validate);