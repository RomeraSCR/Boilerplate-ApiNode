import { Request, Response } from "express";
import { ExampleService } from "../services/exampleService";
import { sendSuccess } from "../utils/response";
import { asyncHandler } from "../middlewares/asyncHandler";
import { BadRequestError } from "../utils/errors";

const exampleService = new ExampleService();

export class ExampleController {
  /**
   * @swagger
   * /examples:
   *   get:
   *     summary: Lista todos os exemplos
   *     tags: [Examples]
   *     parameters:
   *       - in: query
   *         name: page
   *         schema:
   *           type: integer
   *           default: 1
   *         description: Número da página
   *       - in: query
   *         name: limit
   *         schema:
   *           type: integer
   *           default: 10
   *         description: Itens por página
   *     responses:
   *       200:
   *         description: Lista de exemplos retornada com sucesso
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
   *                     data:
   *                       type: array
   *                       items:
   *                         $ref: '#/components/schemas/Example'
   *                     pagination:
   *                       $ref: '#/components/schemas/Pagination'
   */
  findAll = asyncHandler(async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const result = await exampleService.findAll(page, limit);

    sendSuccess(res, {
      data: result.data,
      pagination: {
        page: result.page,
        limit: result.limit,
        total: result.total,
        totalPages: result.totalPages,
      },
    }, "Exemplos listados com sucesso");
  });

  /**
   * @swagger
   * /examples/{id}:
   *   get:
   *     summary: Busca um exemplo por ID
   *     tags: [Examples]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID do exemplo
   *     responses:
   *       200:
   *         description: Exemplo encontrado
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
   *                   $ref: '#/components/schemas/Example'
   *       404:
   *         description: Exemplo não encontrado
   */
  findById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      throw new BadRequestError("ID é obrigatório");
    }
    const example = await exampleService.findById(id);
    sendSuccess(res, example, "Exemplo encontrado com sucesso");
  });

  /**
   * @swagger
   * /examples:
   *   post:
   *     summary: Cria um novo exemplo
   *     tags: [Examples]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - name
   *               - description
   *             properties:
   *               name:
   *                 type: string
   *                 example: Novo Exemplo
   *               description:
   *                 type: string
   *                 example: Descrição do novo exemplo
   *     responses:
   *       201:
   *         description: Exemplo criado com sucesso
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
   *                   $ref: '#/components/schemas/Example'
   *       400:
   *         description: Dados inválidos
   */
  create = asyncHandler(async (req: Request, res: Response) => {
    const { name, description } = req.body;

    if (!name || !description) {
      res.status(400).json({
        success: false,
        message: "Nome e descrição são obrigatórios",
      });
      return;
    }

    const example = await exampleService.create({ name, description });
    sendSuccess(res, example, "Exemplo criado com sucesso", 201);
  });

  /**
   * @swagger
   * /examples/{id}:
   *   put:
   *     summary: Atualiza um exemplo
   *     tags: [Examples]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID do exemplo
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               description:
   *                 type: string
   *     responses:
   *       200:
   *         description: Exemplo atualizado com sucesso
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
   *                   $ref: '#/components/schemas/Example'
   *       404:
   *         description: Exemplo não encontrado
   */
  update = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      throw new BadRequestError("ID é obrigatório");
    }
    const { name, description } = req.body;

    const example = await exampleService.update(id, { name, description });
    sendSuccess(res, example, "Exemplo atualizado com sucesso");
  });

  /**
   * @swagger
   * /examples/{id}:
   *   delete:
   *     summary: Deleta um exemplo
   *     tags: [Examples]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID do exemplo
   *     responses:
   *       200:
   *         description: Exemplo deletado com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 success:
   *                   type: boolean
   *                 message:
   *                   type: string
   *       404:
   *         description: Exemplo não encontrado
   */
  delete = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      throw new BadRequestError("ID é obrigatório");
    }
    await exampleService.delete(id);
    sendSuccess(res, null, "Exemplo deletado com sucesso");
  });
}

