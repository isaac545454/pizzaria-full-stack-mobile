import { Request, Response } from 'express';
import {CreateProductsServices} from '../../services/products/CreateProductsServices'

class CreateProductsController{
  async handle(req: Request, res: Response){
   const createProductsServices = new CreateProductsServices()
   const products = await createProductsServices.execute()

   return res.json(products)
  }
}

export {CreateProductsController}