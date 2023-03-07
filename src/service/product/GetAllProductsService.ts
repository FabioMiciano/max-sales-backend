import prismaClient from "../../../prisma"

class GetAllProductsService {
    async execute() {
        const products = await prismaClient.product.findMany({
            include: {
                category: {
                    select: { 
                        id: true,
                        title: true
                    }
                }
            }
        })

        return products;
    }
}

export { GetAllProductsService }