import prismaClient from "../../../prisma";

class DeleteCategoryService {
    async execute(id: string) {

        const deleteProccess = await prismaClient.category.delete(
            {
                where:{
                    id: id 
                }
            }
        );

        return deleteProccess;
    }
}

export { DeleteCategoryService };