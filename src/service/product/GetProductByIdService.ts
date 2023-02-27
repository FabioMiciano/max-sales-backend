import prismaClient from "../../../prisma"

class GetProductByIdService {
    async execute(category_id) {
        const products = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            },
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

export { GetProductByIdService }