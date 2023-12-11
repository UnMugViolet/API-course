import { Identifier } from "src/@models/identifier";

export abstract class BaseService<TModel extends Identifier> {
  protected models: TModel[] = [];
  protected getNextId(models: TModel[]): number {
    return models.reduce(
      (prev, curr) => (prev < curr.id ? curr.id : prev),
      models?.[0]?.id ?? 1,
    );
  }

  async saveModel(model: TModel): Promise<TModel> {
    return model.id ? this.updateModel(model) : this.addNewModel(model);
  }

  protected async addNewModel(model: TModel): Promise<TModel> {
    const result: TModel = {
      ...model,
      id: this.getNextId(this.models),
    };
    this.models = [...(this.models ?? []), result];
    return result;
  }

  protected async updateModel(model: TModel): Promise<TModel> {
    this.models = [...this.models.filter((x) => x.id !== model.id), model];
    return model;
  }

  protected async deleteModel(id: number): Promise<TModel> {
    const result = this.getModel(id);
    this.models = this.models.filter((model) => model.id !== id);
    return result;
  }

  protected async getModels(): Promise<TModel[]> {
    return this.models;
  }

  protected async getModel(id: number): Promise<TModel> {
    return this.models.find((model) => model.id === id);
  }
}