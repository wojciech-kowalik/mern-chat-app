import bodyParser from "body-parser";
import cors from "cors";
import routes from "../api/index.js";
import http from "http";
import socketIO from "socket.io";

export default app => {
  const server = http.createServer(app);
  const io = socketIO.listen(server);

  // add socket io to locals
  app.locals.io = io;

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable("trust proxy");

  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());
  // Load API routes
  app.use(routes());

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  /// error handlers
  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === "UnauthorizedError") {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message
      }
    });
  });

  return app;
};
