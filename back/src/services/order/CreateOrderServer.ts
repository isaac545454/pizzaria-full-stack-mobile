import prismaClient from "../../prisma";

interface Props {
    table: number 
    name: string
}


class CreateOrderServer{
async execute({table, name}){
   const order = await prismaClient.order.create({
    data:{
        table: table,
        name: name
    }
   })

   return order
}
}
export {CreateOrderServer}
