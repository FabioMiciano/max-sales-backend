import prismaClient from "../../../prisma";

class DeleteUserService {
    async execute(id: string) {
        const deleteProccess = await prismaClient.user.delete(
            {
                where:{
                    id: id 
                }
            }
        );

        return deleteProccess
    }
}

export { DeleteUserService };