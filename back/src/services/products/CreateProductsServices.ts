import prismaClient from '../../prisma'

interface ProductsRequest{
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductsServices{
  async execute({name, price, description, banner, category_id}: ProductsRequest){

    const product = await prismaClient.product.create({
      data:{
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id,
      }
    })
    return product
  }
}

export {CreateProductsServices}
