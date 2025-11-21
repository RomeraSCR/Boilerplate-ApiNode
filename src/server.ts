/**
 * Boilerplate API Node.js com TypeScript e Swagger
 * Desenvolvido por FxDevelopmente
 * 
 * @version 1.0.1
 */

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { config } from "./config/env";
import { swaggerDocs } from "./swagger";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import { notFoundHandler } from "./middlewares/notFound";
import { validateRequest } from "./middlewares/validation";
import type { Express } from "express";

const app: Express = express();

// Security Middlewares
app.use(helmet());
app.use(
  cors({
    origin: config.cors.origin,
    credentials: config.cors.credentials,
  })
);

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo de 100 requisições por IP
  message: {
    success: false,
    message: "Muitas requisições deste IP, tente novamente mais tarde.",
  },
});
app.use(limiter);

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Validation
app.use(validateRequest);

// Swagger Documentation
swaggerDocs(app);

// API Routes
app.use(config.api.prefix, routes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Boilerplate API Node.js com TypeScript e Swagger",
    version: "1.0.1",
    documentation: `${req.protocol}://${req.get("host")}${config.swagger.path}`,
  });
});

// 404 Handler
app.use(notFoundHandler);

// Error Handler (deve ser o último middleware)
app.use(errorHandler);

// Graceful Shutdown
function startServer(): void {
  const server = app.listen(config.port, () => {
    console.log(`\n🚀 Servidor rodando em http://localhost:${config.port}`);
    console.log(`📚 Documentação Swagger: http://localhost:${config.port}${config.swagger.path}`);
    console.log(`🌍 Ambiente: ${config.nodeEnv}\n`);
  });

  // Tratamento de erros não capturados
  process.on("unhandledRejection", (reason: Error) => {
    console.error("Unhandled Rejection:", reason);
    server.close(() => {
      process.exit(1);
    });
  });

  process.on("SIGTERM", () => {
    console.log("SIGTERM recebido. Encerrando servidor graciosamente...");
    server.close(() => {
      console.log("Servidor encerrado.");
      process.exit(0);
    });
  });

  process.on("SIGINT", () => {
    console.log("\nSIGINT recebido. Encerrando servidor graciosamente...");
    server.close(() => {
      console.log("Servidor encerrado.");
      process.exit(0);
    });
  });
}

startServer();

export default app;
