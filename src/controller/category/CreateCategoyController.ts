import { Request, Response } from 'express'
import { CreateCategoryService } from '../../service/category/CreateCategoryService';

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { title, info, type, link_type, link_action, image } = req.body

        if(!req.file) {
            throw new Error("Image Product Incorrect");
        } else {
            const { originalname, filename: image } = req.file;

            const service = new CreateCategoryService();
            const user = await service.execute({ 
                title,
                info,
                type,
                link_type,
                link_action,
                image
            });
    
            return res.json(user);
        }
    }
}

export { CreateCategoryController }