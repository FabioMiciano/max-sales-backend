import prismaClient from "../../../prisma"

class GetAllProductsService {
    async execute() {
        const products = await prismaClient.product.findMany({
            select: {
                id: true,
                title: true,
                info: true,
                type: true,
                link_type: true,
                link_action: true,
                image: true,
                category_id: true
            }
        })

        return products;
    }
}

export { GetAllProductsService }