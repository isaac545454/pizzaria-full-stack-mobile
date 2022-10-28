import prismaClient from '../../prisma'

interface CategoryRequest{
  name: string;
}


class CreateCategoryServices{
  async execute({name}: CategoryRequest){
   
    if(name === ""){
      throw new Error("nome invalido");
      
    }
    
    const category = await prismaClient.category.create({
      data:{
        name: name,
      },
      select: {
        id: true,
        name: true,
      }
    })

    return category
  }
}

export {CreateCategoryServices}