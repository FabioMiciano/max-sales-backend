import prismaClient from '../../../prisma';

class GetUserService {
    async execute(id: string) {
        const user = await prismaClient.user.findFirst({
            where:{
                id: id
            }, 
            select : {
                id: true,
                name: true,
                email: true,
                cpf: true
            }
        });

        return user;
    }
}

export { GetUserService };