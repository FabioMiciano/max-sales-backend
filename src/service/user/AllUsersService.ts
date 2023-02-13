import prismaClient from "../../../prisma";

class AllUsersService {
    async execute() {

        const users = await prismaClient.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                cpf: true,
                isAdmin: true
            }
        });

        return users;
    }
}

export { AllUsersService }