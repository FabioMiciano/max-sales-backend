import prismaClient from '../../../prisma';

interface PurchaseRequest {
    user_id: string,
    category_id: string
}

class CreatePurchaseService {
    async execute({ user_id, category_id }: PurchaseRequest) {
        const useralreadyExists = await prismaClient.purchase.findFirst({
            where:{
                user_id: user_id,
                category_id: category_id
            }
        })

        if(useralreadyExists) {
            throw Error("User already has product");
        }

        const purchase = await prismaClient.purchase.create({
            data:{
                user_id: user_id,
                category_id: category_id
            }, 
            select: {
                id: true,
                user_id: true,
                category_id: true
            }
        })

        return purchase;
    }
}

export { CreatePurchaseService }