import PrismaClient from ".prisma/client";
import prismaClient from "../../prisma";

interface Props {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddOrderItemsServices {
  async execute({ order_id, product_id, amount }: Props) {
    const order = await prismaClient.item.create({
      data: {
        order_id: order_id,
        product_id: product_id,
        amount,
      },
    });
    return order;
  }
}

export { AddOrderItemsServices };
