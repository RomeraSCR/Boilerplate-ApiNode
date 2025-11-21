import { Router, type IRouter } from "express";
import exampleRoutes from "./exampleRoutes";


const router: IRouter = Router();

// Rotas da API
router.use("/examples", exampleRoutes);

// Rota de health check
/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check da API
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API está funcionando
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: string
 *                     timestamp:
 *                       type: string
 *                     uptime:
 *                       type: number
 */
router.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "API está funcionando",
    data: {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
  });
});

export default router;

