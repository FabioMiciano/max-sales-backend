import { Request, Response } from "express";
import { UpdateProductService } from "../../service/product/UpdateProductService";

class UpdateProductController {
    async handle(req: Request, res: Response) {
        const { id, title, info, type, link_type, link_action, category_id } = req.body;

        const service = new UpdateProductService()

        const updated = await service.execute(
            {
                id, 
                title, 
                info, 
                type, 
                link_type, 
                link_action, 
                category_id
            }
        );
        return res.json(updated);
    }
}

export { UpdateProductController }