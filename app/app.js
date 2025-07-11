const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const winston = require("winston");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

const logger = winston.createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
      },
    },
  })
);

app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use(
  cors({
    origin: process.env.PUBLIC_URL
      ? [
          process.env.PUBLIC_URL,
          "https://wtm-booklistapi-production.up.railway.app",
        ]
      : "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Request-ID"],
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: "10kb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10kb" }));

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

app.use("/api/books", bookRoutes);


app.get("/test", (req, res) => {
  console.log("GET /test hit");
  res.send("API is working!");
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "healthy",
    version: process.env.npm_package_version,
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});


app.get("/git-repo", (req, res) => {
  res.redirect("https://github.com/duduBmoon21/wtm-bookListApi.git");
});

app.use((req, res) => {
  logger.warn(`404: ${req.method} ${req.path}`);
  res.status(404).json({
    error: "NOT_FOUND",
    message: `Route ${req.method} ${req.path} not found`,
    timestamp: new Date().toISOString(),
  });
});


app.use((err, req, res, next) => {
  logger.error(`Error: ${err.stack}`);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: err.name || "INTERNAL_ERROR",
    message: err.message || "Internal server error",
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
    timestamp: new Date().toISOString(),
  });
});

module.exports = app;
