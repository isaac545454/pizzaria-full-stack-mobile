import prismaClient from "../../prisma";

interface Props{
    order_id: string;
} 

class RemoveOrderServer{
 async execute({order_id}: Props){
   
    const order = await prismaClient.order.delete({
        where:{
            id: order_id,
        }
    })

    return order
 }
}

export {RemoveOrderServer}