import prismaClient from "../../../prisma";

interface ProductRequest {
    id: string
    title: string,
    info: string,
    type: string,
    link_type: string,
    link_action: string,
    category_id: string
}

class UpdateProductService {
    async execute({id, title, info, type, link_type, link_action, category_id}: ProductRequest) {
        let updateProduct = await prismaClient.product.update(
            {
                where: {
                    id: id
                }, 
                data: {
                    title: title,
                    info: info,
                    link_action: link_action,
                    category_id: category_id
                }
            }
        );

        return updateProduct;
    }
}

export { UpdateProductService };