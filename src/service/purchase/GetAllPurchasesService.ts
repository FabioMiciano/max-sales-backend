import prismaClient from '../../../prisma';

class GetAllPurchasesService {
    async execute() {
        const purchases = prismaClient.purchase.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        cpf: true
                    }
                },
                category: {
                    select: {
                        title: true
                    }
                }
            }
        })

        return purchases
    }
}

export { GetAllPurchasesService }