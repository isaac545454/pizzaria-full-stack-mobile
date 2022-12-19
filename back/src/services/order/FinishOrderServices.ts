import prismaClient from "../../prisma"

interface Props {
    order_id: string
}


class FinishOrderServices{
 async execute({order_id}: Props){
 const order = await prismaClient.order.update({
    where:{
        id: order_id
    }, 
    data:{
        status: true
    }
})

  return order
 }
}

export {FinishOrderServices}