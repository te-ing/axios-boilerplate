import * as fruitHandlers from "./fruit";
import * as authHandlers from "./auth";

export const handlers = [
  ...Object.values(fruitHandlers),
  ...Object.values(authHandlers),
];
