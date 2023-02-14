import prismaClient from "../../../prisma";

class DeletePurchaseService {
    async execute(id: string) {
        const deleteProccess = await prismaClient.purchase.delete(
            {
                where:{
                    id: id 
                }
            }
        );

        return deleteProccess
    }
}

export { DeletePurchaseService };