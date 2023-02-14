import prismaClient from "../../../prisma";

class DeleteProductService {
    async execute(id: string) {

        const deleteProccess = await prismaClient.product.delete(
            {
                where:{
                    id: id 
                }
            }
        );

        return deleteProccess;
    }
}

export { DeleteProductService };