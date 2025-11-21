export interface Example {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PaginatedResult<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export class ExampleService {
  private examples: Example[] = [];
  private nextId = 1;

  async findAll(page: number = 1, limit: number = 10): Promise<PaginatedResult<Example>> {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = this.examples.slice(startIndex, endIndex);

    return {
      data: paginatedData,
      page,
      limit,
      total: this.examples.length,
      totalPages: Math.ceil(this.examples.length / limit),
    };
  }

  async findById(id: string): Promise<Example> {
    const example = this.examples.find((e) => e.id === id);
    if (!example) {
      throw new Error("Exemplo não encontrado");
    }
    return example;
  }

  async create(data: { name: string; description: string }): Promise<Example> {
    const now = new Date();
    const example: Example = {
      id: String(this.nextId++),
      name: data.name,
      description: data.description,
      createdAt: now,
      updatedAt: now,
    };
    this.examples.push(example);
    return example;
  }

  async update(id: string, data: Partial<{ name: string; description: string }>): Promise<Example> {
    const example = await this.findById(id);
    if (data.name) example.name = data.name;
    if (data.description) example.description = data.description;
    example.updatedAt = new Date();
    return example;
  }

  async delete(id: string): Promise<void> {
    const index = this.examples.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new Error("Exemplo não encontrado");
    }
    this.examples.splice(index, 1);
  }
}

