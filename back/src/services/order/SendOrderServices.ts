import prismaClient from "../../prisma"

interface Props{
order_id:string;
}

class SendOrderServices{
async execute({order_id}:Props){
 const order = await prismaClient.order.update({
    where:{
        id: order_id
    },
    data:{
        draft: false
    }
 })   

 return order
}
}

export {SendOrderServices}