import prismaClient from '../../../prisma';

interface CategoryRequest {
    title: string,
    info: string,
    type: string,
    link_type: string,
    link_action: string,
    image: string
}

class CreateCategoryService {
    async execute({title, info, type, link_type, link_action, image}: CategoryRequest) {
        if(!title) {
            throw new Error("Title Incorrect");
        }

        const cateogryAlreadyExists = await prismaClient.category.findFirst({
            where:{
                title: title
            }
        })

        if(cateogryAlreadyExists) {
            throw Error("Cateogt already exists");
        }

        const category = await prismaClient.category.create({
            data: {
                title: title,
                info: info,
                type: type,
                link_type: link_type,
                link_action: link_action,
                image: image
            }
        })

        return {
            id: category.id, 
            title: category.title, 
            info: category.info, 
            type: category.type,
            link_type: category.link_type,
            link_action: category.link_action,
            image: `files/${category.image}`
        };
    }
}

export { CreateCategoryService }