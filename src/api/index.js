import express from "express";
import message from "./routes/message.js";
import status from "./routes/status.js";

export default () => {
  const router = express.Router();
  status(router);
  message(router);

  return router;
};
