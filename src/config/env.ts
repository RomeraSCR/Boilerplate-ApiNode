import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || "3000", 10),
  nodeEnv: process.env.NODE_ENV || "development",
  api: {
    prefix: process.env.API_PREFIX || "/api/v1",
  },
  swagger: {
    enabled: process.env.SWAGGER_ENABLED !== "false",
    path: process.env.SWAGGER_PATH || "/api/docs",
  },
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    credentials: process.env.CORS_CREDENTIALS === "true",
  },
} as const;

