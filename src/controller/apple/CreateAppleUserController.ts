import { Request, Response } from 'express';
import { Category } from '@prisma/client';
import { CreateAppleUserService } from '../../service/apple/CreateAppleUserService';
import { GetAllCategoryService } from '../../service/category/GetAllCategoryService';
import { CreatePurchaseService } from '../../service/purchase/CreatePurchaseService';

class CreateAppleUserController {
    async handle(req: Request, res: Response) {
        const requester_id = req.user_id;
        const { name, email, cpf, password } = req.body


        console.log(requester_id);
        console.log(req.body);

        const createUserService = new CreateAppleUserService();
        const user = await createUserService.execute({ 
            name, 
            email, 
            cpf,
            password,
            requester_id
        });

        const categoriesService = new GetAllCategoryService();
        const categories = await categoriesService.execute();

        const purchaseService = new CreatePurchaseService();

        categories.forEach(async function(category){
            const userID = user.id
            await purchaseService.execute({user_id: user.id, category_id: category.id})        
        });

        return res.json(user);
    }
}

export { CreateAppleUserController }