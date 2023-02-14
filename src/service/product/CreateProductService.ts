import prismaClient from '../../../prisma';

interface ProductRequest {
    title: string,
    info: string,
    type: string,
    link_type: string,
    link_action: string,
    image: string,
    category_id: string
}

class CreateProductService {
    async execute({title, info, type, link_type, link_action, image, category_id}: ProductRequest) {
        if(!title) {
            throw new Error("Title Incorrect");
        }

        const useralreadyExists = await prismaClient.product.findFirst({
            where:{
                title: title
            }
        })

        if(useralreadyExists) {
            throw Error("Product already exists");
        }

        const product = await prismaClient.product.create({
            data:{
                title: title,
                info: info,
                type: type,
                link_type: link_type,
                link_action: link_action,
                image: image,
                category_id: category_id
            }
        })

        return {
            id: product.id, 
            title: product.title, 
            info: product.info, 
            type: product.type, 
            link_type: product.link_type,
            link_action: product.link_action, 
            image: `files/${product.image}`,
            category_id: product.category_id
        };
    }
}

export { CreateProductService }