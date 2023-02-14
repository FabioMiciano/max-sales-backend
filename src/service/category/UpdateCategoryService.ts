import prismaClient from "../../../prisma";

interface CategoryRequest {
    id: string
    title: string,
    info: string
}

class UpdateCategoryService {
    async execute({id, title, info}: CategoryRequest) {
        let updateCategory = await prismaClient.category.update(
            {
                where: {
                    id: id
                }, 
                data: {
                    title: title,
                    info: info
                }
            }
        );

        return updateCategory;
    }
}

export { UpdateCategoryService };