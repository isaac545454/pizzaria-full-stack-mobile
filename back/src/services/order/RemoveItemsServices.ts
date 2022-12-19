import prismaClient from "../../prisma";

interface Props{
    item_id: string;
}

class RemoveItemsServices {
    async execute({item_id}: Props){
        const order =  await prismaClient.item.delete({
            where:{
                id: item_id
            }
        })
        return order
    }
}

export {RemoveItemsServices}