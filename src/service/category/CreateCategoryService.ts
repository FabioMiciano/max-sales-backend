import prismaClient from '../../../prisma';

interface CategoryRequest {
    title: string,
    info: string,
    image: string
}

class CreateCategoryService {
    async execute({title, info, image}: CategoryRequest) {
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
                image: image
            }
        })

        return {
            id: category.id, 
            title: category.title, 
            info: category.info, 
            image: `files/${category.image}`
        };
    }
}

export { CreateCategoryService }