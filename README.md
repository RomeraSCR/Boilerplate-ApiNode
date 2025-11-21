<div align="center">

# 🚀 Boilerplate API Node.js

<div>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" />
</div>

### ⚡ Um boilerplate completo e profissional para criação de APIs RESTful

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![npm version](https://img.shields.io/npm/v/rmrapi.svg)](https://www.npmjs.com/package/rmrapi)
[![npm downloads](https://img.shields.io/npm/dm/rmrapi.svg)](https://www.npmjs.com/package/rmrapi)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.1-black)](https://expressjs.com/)

**Desenvolvido com ❤️ por [RomeraSCR](https://github.com/RomeraSCR)**

[CLI](#-criar-projeto-com-cli) • [Características](#-características) • [Instalação](#-instalação-rápida) • [Gerador de Rotas](#-gerador-de-rotas) • [Documentação](#-documentação) • [Contribuir](#-contribuindo)

</div>

---

## 📋 Índice

- [⚡ Criar Projeto com CLI](#-criar-projeto-com-cli) 🆕 **RECOMENDADO**
- [✨ Características](#-características)
- [🎯 Gerador de Rotas](#-gerador-de-rotas) ⭐ **DESTAQUE**
- [🏗️ Arquitetura](#️-arquitetura)
- [🚀 Instalação Rápida](#-instalação-rápida)
- [🛠️ Scripts Disponíveis](#️-scripts-disponíveis)
- [📚 Documentação da API](#-documentação-da-api)
- [💻 Exemplos de Uso](#-exemplos-de-uso)
- [🔒 Segurança](#-segurança)
- [📦 Tecnologias](#-tecnologias)
- [🎨 Estrutura do Projeto](#-estrutura-do-projeto)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

---

<div align="center">

# ⚡ Criar Projeto com CLI

## 🚀 **A forma mais rápida de começar!**

</div>

### 📦 Instalação e Uso

Crie um novo projeto em segundos usando o comando CLI:

```bash
npx rmrapi-code meu-projeto
```

### 🎯 Modo Interativo

Execute sem argumentos para usar o modo interativo:

```bash
npx rmrapi-code
```

O CLI irá perguntar:
- 📦 Nome do projeto
- 📦 Gerenciador de pacotes (pnpm, npm, yarn)
- 🗄️ Tipo de banco de dados (MongoDB, PostgreSQL, MySQL, SQLite ou Nenhum)
- 🔒 Sistema de segurança (JWT, Passport.js ou Nenhum)
- 📥 Instalar dependências automaticamente?
- 🔧 Inicializar repositório Git?

### ⚙️ Opções Disponíveis

```bash
# Criar projeto com nome específico
npx rmrapi-code meu-projeto

# Pular instalação de dependências
npx rmrapi-code meu-projeto --skip-install
# ou
npx rmrapi-code meu-projeto -s

# Especificar gerenciador de pacotes
npx rmrapi-code meu-projeto --package-manager pnpm
# ou
npx rmrapi-code meu-projeto -p pnpm

# Não inicializar Git
npx rmrapi-code meu-projeto --no-git

# Ver ajuda
npx rmrapi-code --help
# ou
npx rmrapi-code -h

# Ver versão
npx rmrapi-code --version
# ou
npx rmrapi-code -v
```

### ✨ O que o CLI faz automaticamente:

- ✅ Cria a estrutura completa do projeto
- ✅ Copia todos os arquivos necessários
- ✅ Configura o `package.json` com o nome do projeto
- ✅ Configura banco de dados (se selecionado)
- ✅ Configura sistema de autenticação (se selecionado)
- ✅ Instala dependências automaticamente (incluindo dependências do banco/segurança)
- ✅ Inicializa repositório Git (opcional)
- ✅ Pronto para começar a desenvolver!

### 📝 Exemplo Completo

```bash
# Criar projeto
npx rmrapi-code minha-api

# O CLI irá:
# 1. Criar o diretório "minha-api"
# 2. Copiar todos os arquivos do template
# 3. Instalar dependências
# 4. Inicializar Git
# 5. Pronto! 🎉

# Entrar no projeto
cd minha-api

# Iniciar desenvolvimento
pnpm run dev
```

### 🔗 Links Úteis

- 📦 [npm package](https://www.npmjs.com/package/rmrapi-code)
- 📚 [Documentação completa](#-instalação-rápida)
- 🐛 [Reportar bug](https://github.com/RomeraSCR/Boilerplate-ApiNode/issues)

---

## ✨ Características

<div align="center">

| Feature | Descrição |
|---------|-----------|
| 🎯 **Gerador de Rotas** ⭐ | **Crie rotas completas (Service, Controller, Routes) com um único comando!** |
| 🗄️ **Multi-Banco de Dados** | Suporte para MongoDB, PostgreSQL, MySQL e SQLite |
| 🔐 **Autenticação Integrada** | JWT e Passport.js prontos para uso |
| 📝 **Validação de Dados** | Joi, Zod ou Yup configuráveis |
| 📊 **Sistema de Logs** | Winston, Pino ou Morgan integrados |
| 📧 **Serviço de Email** | Nodemailer ou SendGrid configuráveis |
| 🔷 **TypeScript** | Tipagem estática para maior segurança e produtividade |
| ⚡ **Express 5** | Framework web rápido e minimalista |
| 📖 **Swagger/OpenAPI** | Documentação automática e interativa da API |
| 🏛️ **Arquitetura Limpa** | Separação de responsabilidades (MVC) |
| 🛡️ **Tratamento de Erros** | Sistema robusto de tratamento de erros |
| ✅ **Validação** | Middlewares de validação de requisições |
| 🔐 **Segurança** | Helmet, CORS e Rate Limiting configurados |
| 🔄 **Hot Reload** | Desenvolvimento com ts-node-dev |
| 🌍 **Variáveis de Ambiente** | Configuração flexível via .env |
| 🚀 **CLI Interativo** | Criação de projetos com configuração guiada |

</div>

---

## 🏗️ Arquitetura

Este boilerplate segue os princípios de **Arquitetura Limpa** e **Separação de Responsabilidades**:

```
┌─────────────────────────────────────────────────────────┐
│                      Routes Layer                        │
│              (Definição de Endpoints)                    │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                   Controller Layer                      │
│          (Lógica de Requisições HTTP)                   │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                    Service Layer                        │
│              (Lógica de Negócio)                        │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                    Data Layer                           │
│         (Banco de Dados / APIs Externas)                │
└─────────────────────────────────────────────────────────┘
```

### 📁 Camadas

- **Routes** → Definem os endpoints da API
- **Controllers** → Processam requisições HTTP e retornam respostas
- **Services** → Contêm a lógica de negócio
- **Middlewares** → Interceptam requisições (validação, autenticação, etc)
- **Utils** → Funções auxiliares reutilizáveis

---

## 🚀 Instalação Rápida

> 💡 **Recomendado:** Use o [CLI](#-criar-projeto-com-cli) para criar um novo projeto em segundos!

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [pnpm](https://pnpm.io/) ou npm/yarn

### ⚙️ Opção 1: Usando o CLI (Recomendado) ⭐

```bash
# Criar novo projeto
npx rmrapi-code meu-projeto

# Entrar no projeto
cd meu-projeto

# Iniciar desenvolvimento
pnpm run dev
```

**Pronto!** 🎉 Seu projeto está configurado e rodando!

### ⚙️ Opção 2: Clonar do GitHub

1. **Clone o repositório**
   ```bash
   git clone https://github.com/RomeraSCR/Boilerplate-ApiNode.git
   cd Boilerplate-ApiNode
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```
   
   Edite o arquivo `.env`:
   ```env
   PORT=3000
   NODE_ENV=development
   API_PREFIX=/api/v1
   SWAGGER_ENABLED=true
   SWAGGER_PATH=/api/docs
   CORS_ORIGIN=*
   CORS_CREDENTIALS=false
   ```

4. **Execute o servidor**
   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

5. **Acesse a API**
   - API: `http://localhost:3000`
   - Swagger: `http://localhost:3000/api/docs`
   - Health Check: `http://localhost:3000/api/v1/health`

---

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm run dev` | Inicia o servidor em modo desenvolvimento com hot reload |
| `pnpm run build` | Compila o TypeScript para JavaScript |
| `pnpm start` | Inicia o servidor em modo produção (requer build) |
| `pnpm run type-check` | Verifica tipos TypeScript sem compilar |
| `pnpm run help` | Lista todos os comandos disponíveis |
| `pnpm addRoute <nome>` | Gera automaticamente uma nova rota completa |
| `pnpm addBanco` | Configura banco de dados (MongoDB, PostgreSQL, MySQL, SQLite) |
| `pnpm addAuth` | Adiciona sistema de autenticação (JWT ou Passport.js) |
| `pnpm addValidator` | Adiciona validação de dados (Joi, Zod ou Yup) |
| `pnpm addLogger` | Adiciona sistema de logs (Winston, Pino ou Morgan) |
| `pnpm addEmail` | Adiciona serviço de email (Nodemailer ou SendGrid) |
| `pnpm addMiddleware <nome>` | Cria um novo middleware customizado |
| `pnpm addModel <nome>` | Cria um novo model para o banco de dados |

---

---

<div align="center">

# 🎯 Gerador de Rotas

## ⚡ **FUNCIONALIDADE PRINCIPAL** ⚡

### 🚀 Crie rotas completas com um único comando!

</div>

---

## 🌟 Por que usar o Gerador de Rotas?

O **Gerador de Rotas** é a funcionalidade mais poderosa deste boilerplate! Ele elimina a necessidade de criar manualmente arquivos repetitivos, economizando horas de desenvolvimento.

### ✨ O que ele faz automaticamente:

<div align="center">

| Arquivo | O que é criado |
|---------|----------------|
| 📄 **Service** | CRUD completo com lógica de negócio |
| 📄 **Controller** | Todos os endpoints HTTP (GET, POST, PUT, DELETE) |
| 📄 **Routes** | Configuração de rotas com middlewares |
| 📝 **Swagger** | Documentação automática da API |
| 🔗 **Integração** | Atualização automática do `routes/index.ts` |

</div>

### 🎁 Exemplo Real: Criar uma rota de Usuários

**Antes (sem o gerador):** ⏱️ ~30-45 minutos
- Criar `userService.ts` manualmente
- Criar `userController.ts` manualmente  
- Criar `userRoutes.ts` manualmente
- Atualizar `routes/index.ts`
- Adicionar documentação Swagger
- Testar tudo

**Depois (com o gerador):** ⚡ ~5 segundos
```bash
pnpm addRoute user
```

**Pronto!** ✅ Todos os arquivos criados e configurados automaticamente!

---

## 📝 Como Usar

### Comandos Disponíveis

```bash
# Opção 1: addRoute
pnpm addRoute <nome-da-rota>

# Opção 2: createRoute (alias)
pnpm createRoute <nome-da-rota>
```

### 💡 Exemplos Práticos

```bash
# Criar uma rota simples
pnpm addRoute user

# Criar uma rota com nome composto (kebab-case)
pnpm addRoute product-item

# Criar múltiplas rotas rapidamente
pnpm addRoute order
pnpm addRoute category
pnpm addRoute payment-method
```

### 🎯 O que é gerado automaticamente?

```
src/
├── services/
│   └── userService.ts          ← Service com CRUD completo
│       ├── findAll()           ← Lista com paginação
│       ├── findById()          ← Busca por ID
│       ├── create()            ← Cria novo
│       ├── update()            ← Atualiza
│       └── delete()            ← Deleta
│
├── controllers/
│   └── userController.ts       ← Controller com endpoints
│       ├── findAll             ← GET /api/v1/users
│       ├── findById            ← GET /api/v1/users/:id
│       ├── create              ← POST /api/v1/users
│       ├── update              ← PUT /api/v1/users/:id
│       └── delete              ← DELETE /api/v1/users/:id
│
└── routes/
    └── userRoutes.ts           ← Routes configuradas
        └── Todas as rotas com middlewares
```

### 🔗 Endpoints Gerados Automaticamente

| Método | Endpoint | Descrição | Status |
|--------|----------|-----------|--------|
| `GET` | `/api/v1/users` | Lista todos (com paginação) | ✅ |
| `GET` | `/api/v1/users/:id` | Busca por ID | ✅ |
| `POST` | `/api/v1/users` | Cria novo registro | ✅ |
| `PUT` | `/api/v1/users/:id` | Atualiza registro | ✅ |
| `DELETE` | `/api/v1/users/:id` | Deleta registro | ✅ |

### 📚 Documentação Swagger Automática

A documentação Swagger é gerada automaticamente para todos os endpoints, incluindo:
- ✅ Descrições detalhadas
- ✅ Parâmetros de query e path
- ✅ Schemas de request/response
- ✅ Exemplos de uso
- ✅ Códigos de status HTTP

### 🎨 Recursos Avançados

- ✅ **Validação automática** de parâmetros
- ✅ **Tratamento de erros** integrado
- ✅ **Paginação** pronta para uso
- ✅ **Tipagem TypeScript** completa
- ✅ **Código limpo** e organizado

---

<div align="center">

### 🚀 **Economize tempo e foque no que importa!**

**Crie uma rota completa em segundos, não em horas!**

</div>

---

---

## 📚 Documentação da API

A documentação Swagger está disponível em:

```
http://localhost:3000/api/docs
```

### 📖 Recursos da Documentação

- ✅ Interface interativa para testar endpoints
- ✅ Esquemas de dados completos
- ✅ Exemplos de requisições e respostas
- ✅ Códigos de status HTTP
- ✅ Validações e parâmetros

---

## 💻 Exemplos de Uso

### 🔍 Health Check

```bash
curl http://localhost:3000/api/v1/health
```

**Resposta:**
```json
{
  "success": true,
  "message": "API está funcionando",
  "data": {
    "status": "ok",
    "timestamp": "2024-01-01T00:00:00.000Z",
    "uptime": 123.456
  }
}
```

### 📝 Criar um Registro

```bash
curl -X POST http://localhost:3000/api/v1/examples \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Meu Exemplo",
    "description": "Descrição do exemplo"
  }'
```

### 📋 Listar com Paginação

```bash
curl "http://localhost:3000/api/v1/examples?page=1&limit=10"
```

**Resposta:**
```json
{
  "success": true,
  "message": "Exemplos listados com sucesso",
  "data": {
    "data": [...],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "totalPages": 10
    }
  }
}
```

### 🔎 Buscar por ID

```bash
curl http://localhost:3000/api/v1/examples/1
```

### ✏️ Atualizar

```bash
curl -X PUT http://localhost:3000/api/v1/examples/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nome Atualizado",
    "description": "Descrição Atualizada"
  }'
```

### 🗑️ Deletar

```bash
curl -X DELETE http://localhost:3000/api/v1/examples/1
```

---

## 🔒 Segurança

Este boilerplate inclui várias camadas de segurança:

| Recurso | Descrição |
|---------|-----------|
| **Helmet** | Configura headers de segurança HTTP |
| **CORS** | Controle de acesso cross-origin configurável |
| **Rate Limiting** | Limite de 100 requisições por IP a cada 15 minutos |
| **Validação** | Middlewares de validação de entrada |
| **Error Handling** | Tratamento seguro de erros sem expor detalhes sensíveis |

---

## 📦 Tecnologias

### 🎯 Core

<div align="center">

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20" height="20"> **Node.js** | 18+ | Runtime JavaScript |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="20" height="20"> **TypeScript** | 5.9 | Tipagem estática |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="20" height="20"> **Express** | 5.1 | Framework web |

</div>

### 📚 Dependências Principais

**Produção:**
- `express` - Framework web
- `swagger-jsdoc` - Geração de documentação Swagger
- `swagger-ui-express` - Interface Swagger UI
- `dotenv` - Gerenciamento de variáveis de ambiente
- `cors` - Middleware CORS
- `helmet` - Segurança HTTP
- `express-rate-limit` - Rate limiting

**Desenvolvimento:**
- `typescript` - Superset JavaScript com tipagem
- `ts-node-dev` - Execução TypeScript com hot reload
- `ts-node` - Execução TypeScript
- `@types/*` - Definições de tipos TypeScript

---

## 🎨 Estrutura do Projeto

```
Boilerplate-ApiNode/
├── 📁 src/
│   ├── 📁 config/              # Configurações (variáveis de ambiente)
│   │   └── env.ts
│   ├── 📁 controllers/         # Controladores (lógica de requisições)
│   │   ├── exampleController.ts
│   │   └── ...
│   ├── 📁 middlewares/         # Middlewares (erros, validação, etc)
│   │   ├── asyncHandler.ts
│   │   ├── errorHandler.ts
│   │   ├── notFound.ts
│   │   └── validation.ts
│   ├── 📁 routes/              # Rotas da API
│   │   ├── index.ts
│   │   ├── exampleRoutes.ts
│   │   └── ...
│   ├── 📁 services/            # Lógica de negócio
│   │   ├── exampleService.ts
│   │   └── ...
│   ├── 📁 scripts/             # Scripts utilitários
│   │   └── addRoute.ts         # Gerador de rotas
│   ├── 📁 types/               # Definições de tipos TypeScript
│   │   └── index.ts
│   ├── 📁 utils/               # Utilitários (erros, respostas)
│   │   ├── errors.ts
│   │   └── response.ts
│   ├── 📄 server.ts            # Arquivo principal do servidor
│   └── 📄 swagger.ts           # Configuração do Swagger
├── 📄 .env.example             # Exemplo de variáveis de ambiente
├── 📄 .gitignore
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 README.md
```

---

## 🎯 Próximos Passos

Para expandir este boilerplate, considere adicionar:

- [ ] 🔐 Autenticação e Autorização (JWT)
- [ ] 🗄️ Banco de Dados (MongoDB, PostgreSQL, etc)
- [ ] 🧪 Testes (Jest, Supertest)
- [ ] ✅ Validação de dados (Joi, Zod)
- [ ] 📝 Logging (Winston, Pino)
- [ ] 🐳 Docker
- [ ] 🔄 CI/CD
- [ ] 🎨 ESLint e Prettier
- [ ] 📊 Monitoramento (Prometheus, Grafana)

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! 🎉

1. **Fork o projeto**
2. **Crie uma branch para sua feature** (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### 📝 Padrões de Código

- Use TypeScript com tipagem estrita
- Siga a arquitetura estabelecida (Routes → Controllers → Services)
- Adicione documentação Swagger para novos endpoints
- Mantenha os testes atualizados (quando implementados)

---

## 📄 Licença

Este projeto está licenciado sob a licença **ISC**.

---

<div align="center">

## 👨‍💻 Autor

**RomeraSCR**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RomeraSCR)

---

### ⭐ Se este projeto foi útil para você, considere dar uma estrela!

[![GitHub stars](https://img.shields.io/github/stars/RomeraSCR/Boilerplate-ApiNode.svg?style=social&label=Star)](https://github.com/RomeraSCR/Boilerplate-ApiNode)
[![GitHub forks](https://img.shields.io/github/forks/RomeraSCR/Boilerplate-ApiNode.svg?style=social&label=Fork)](https://github.com/RomeraSCR/Boilerplate-ApiNode)

**Desenvolvido com ❤️ usando Node.js e TypeScript**

---

![Made with love](https://img.shields.io/badge/Made%20with-❤️-red.svg)

</div>
