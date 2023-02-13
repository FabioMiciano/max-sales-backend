import prismaClient from "../../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    cpf: string,
    password: string
}
class AuthUserService {
    async execute({ cpf, password }: AuthRequest) {
        const user = await prismaClient.user.findFirst({
            where:{
                cpf: cpf
            }
        });

        if(!user) {
            throw new Error("CPF ou senha incorretos");
        }

        const passwordMath = await compare(password, user.password);

        if(!passwordMath) {
            throw new Error("CPF ou senha incorretos");
        }

        const token = sign(
            {
                cpf: user.cpf
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        );

        return { id: user.id, cpf: user.cpf, token: token };
    }
}

export { AuthUserService };