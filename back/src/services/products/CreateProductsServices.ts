import prismaClient from '../../prisma'

class CreateProductsServices{
  async execute(){
    return {ok: true}
  }
}

export {CreateProductsServices}