import { Router, type IRouter } from "express";
import { ExampleController } from "../controllers/exampleController";
import { validatePagination } from "../middlewares/validation";

const router: IRouter = Router();
const exampleController = new ExampleController();

/**
 * @swagger
 * tags:
 *   name: Examples
 *   description: Endpoints de gerenciamento de exemplos
 */

router.get("/", validatePagination, exampleController.findAll);
router.get("/:id", exampleController.findById);
router.post("/", exampleController.create);
router.put("/:id", exampleController.update);
router.delete("/:id", exampleController.delete);

export default router;

