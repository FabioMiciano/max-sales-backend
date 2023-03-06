import { Request, Response } from "express";
import { AuthAdminUserService } from "../../service/auth/AuthAdminUserService";

class AuthAdminUserController {
    async handle(req: Request, res: Response) {
        const { cpf, password } = req.body;
        
        const authUserService = new AuthAdminUserService();

        const auth = await authUserService.execute({cpf, password});

        return res.json(auth);
    }
}

export { AuthAdminUserController }