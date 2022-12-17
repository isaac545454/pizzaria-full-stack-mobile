import { Request, Response } from "express";
import { ListCategoryByIdServices } from "../../services/products/ListCategoryByIdServices";

class ListCategoryByIdController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const listByCategory = new ListCategoryByIdServices();

    const products = await listByCategory.execute({ category_id });
    return res.json(products);
  }
}

export { ListCategoryByIdController };
