/**
 * Configuração do Swagger/OpenAPI
 * Desenvolvido por FxDevelopmente
 */

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { config } from "./config/env";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Boilerplate API Node.js",
      version: "1.0.1",
      description:
        "API RESTful completa construída com Node.js, TypeScript, Express e Swagger. Desenvolvido por FxDevelopmente",
      contact: {
        name: "FxDevelopmente",
        email: "support@example.com",
      },
      license: {
        name: "ISC",
      },
    },
    servers: [
      {
        url: `http://localhost:${config.port}${config.api.prefix}`,
        description: "Servidor de desenvolvimento",
      },
      {
        url: "https://api.example.com/api/v1",
        description: "Servidor de produção",
      },
    ],
    components: {
      schemas: {
        Example: {
          type: "object",
          required: ["id", "name", "description", "createdAt"],
          properties: {
            id: {
              type: "string",
              description: "ID único do exemplo",
              example: "1",
            },
            name: {
              type: "string",
              description: "Nome do exemplo",
              example: "Exemplo 1",
            },
            description: {
              type: "string",
              description: "Descrição do exemplo",
              example: "Este é um exemplo de item",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Data de criação",
            },
          },
        },
        Pagination: {
          type: "object",
          properties: {
            page: {
              type: "integer",
              description: "Página atual",
              example: 1,
            },
            limit: {
              type: "integer",
              description: "Itens por página",
              example: 10,
            },
            total: {
              type: "integer",
              description: "Total de itens",
              example: 100,
            },
            totalPages: {
              type: "integer",
              description: "Total de páginas",
              example: 10,
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Mensagem de erro",
            },
            error: {
              type: "string",
              description: "Detalhes do erro (apenas em desenvolvimento)",
            },
          },
        },
      },
      responses: {
        NotFound: {
          description: "Recurso não encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
              example: {
                success: false,
                message: "Recurso não encontrado",
              },
            },
          },
        },
        BadRequest: {
          description: "Requisição inválida",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
              example: {
                success: false,
                message: "Dados inválidos",
              },
            },
          },
        },
        InternalServerError: {
          description: "Erro interno do servidor",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
              example: {
                success: false,
                message: "Erro interno do servidor",
              },
            },
          },
        },
      },
    },
    tags: [
      {
        name: "Health",
        description: "Endpoints de verificação de saúde da API",
      },
      {
        name: "Examples",
        description: "Endpoints de gerenciamento de exemplos",
      },
],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);

export function swaggerDocs(app: Express): void {
  if (config.swagger.enabled) {
    app.use(
      config.swagger.path,
      swaggerUi.serve,
      swaggerUi.setup(swaggerSpec, {
        customCss: ".swagger-ui .topbar { display: none }",
        customSiteTitle: "Boilerplate API - Documentação",
      })
    );
  }
}
