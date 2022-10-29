import { Request, Response } from 'express';
import {CreateProductsServices} from '../../services/products/CreateProductsServices'

class CreateProductsController{
  async handle(req: Request, res: Response){
   const {name, price, description, category_id} = req.body
   
   
  
   const createProductsServices = new CreateProductsServices()

   if(!req.file){
     throw new Error("envie a foto do produto");
     
   }else{
    
    const file = await req.file
     
   const products = await createProductsServices.execute({
    name, 
    price, 
    description, 
    banner: file.filename,
    category_id
  })

   return res.json(products)
  }
  }
}

export {CreateProductsController}

