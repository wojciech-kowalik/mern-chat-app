import config from "./config/index.js";
import Logger from "./loaders/logger.js";
import expressAppLoader from "./loaders/express.js";
import mongooseLoader from "./loaders/mongoose.js";
import express from "express";

async function run() {
  await mongooseLoader();
  Logger.info("DB loaded and connected!");
  const app = expressAppLoader(express());
  const io = app.locals.io;

  io.on("connection", socket => {
    Logger.info("user connected");
  });

  app.listen(config.port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
    }
    Logger.info(`
        ################################################
        🛡️  Server listening on port: ${config.port} 🛡️ 
        ################################################
      `);
  });
}

run();
