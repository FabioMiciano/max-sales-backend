import { Request, Response } from 'express';
import { DeleteCategoryService } from '../../service/category/DeleteCategoryService';

class DeleteCategoryController {
    async handle(req: Request, res: Response) {
        const { id }  = req.body;

        const service = new DeleteCategoryService();

        const deleteProcess = await service.execute(id);

        return res.json(deleteProcess);
    }
}

export { DeleteCategoryController };