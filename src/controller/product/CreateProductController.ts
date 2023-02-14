import { Request, Response } from 'express'
import { CreateProductService } from '../../service/product/CreateProductService';

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { title, info, type, link_type, link_action, image, category_id } = req.body

        if(!req.file) {
            throw new Error("Image Product Incorrect");
        } else {
            const { originalname, filename: image } = req.file;

            const createUserService = new CreateProductService();
            const user = await createUserService.execute({ 
                title,
                info,
                type,
                link_type,
                link_action,
                image,
                category_id
            });
    
            return res.json(user);
        }
    }
}

export { CreateProductController }