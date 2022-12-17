import prismaClient from "../../prisma";

interface Products {
  category_id: string;
}

class ListCategoryByIdServices {
  async execute({ category_id }: Products) {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });
    return findByCategory;
  }
}

export { ListCategoryByIdServices };
