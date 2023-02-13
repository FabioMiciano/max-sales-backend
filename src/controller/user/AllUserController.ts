import { Request, Response } from "express";
import { AllUsersService } from "../../service/user/AllUsersService";

class AllUserController {
    async handle(req: Request, res: Response) {
        const service = new AllUsersService();
        const users = await service.execute();

        return res.json(users);
    }
}

export { AllUserController }