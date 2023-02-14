import prismaClient from "../../../prisma";

interface PurhcaseRequest {
    id: string,
    user_id: string,
    category_id: string
}

class UpdatePurchaseService {
    async execute({id, user_id, category_id }: PurhcaseRequest) {
        let updatePurchase = await prismaClient.purchase.update(
            {
                where: {
                    id: id
                }, 
                data: {
                    user_id: user_id,
                    category_id: category_id
                }
            }
        );

        return updatePurchase;
    }
}

export { UpdatePurchaseService };