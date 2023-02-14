import { Request, Response } from 'express'
import { GetAllCategoryService } from '../../service/category/GetAllCategoryService';

class GetAllCategoryController {
    async handle(res: Request, req: Response) {

        const service = new GetAllCategoryService();

        const products = await service.execute();

        return req.json(products);
    }
}

export { GetAllCategoryController }