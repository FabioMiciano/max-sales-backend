import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/category/UpdateCategoryService";

class UpdateCategoryController {
    async handle(req: Request, res: Response) {
        const { id, title, info } = req.body;

        const service = new UpdateCategoryService()

        const updated = await service.execute({id, title, info});
        return res.json(updated);
    }
}

export { UpdateCategoryController }