import prismaClient from "../../prisma"

interface Props{
    order_id: string
}

class DetailsOrderServices{
 async execute({order_id} : Props){
   const order = await prismaClient.item.findMany({
    where: {
        order_id: order_id
    }, 
   include: {
    product: true,
    order: true
   }
   })

   return order
 }
}

export {DetailsOrderServices}