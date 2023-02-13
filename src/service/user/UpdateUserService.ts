import prismaClient from "../../../prisma";
import { hash } from 'bcryptjs';

interface UserRequest {
    id: string,
    name: string,
    email: string,
    cpf: string,
    password: string
}

class UpdateUserService {
    async execute({id, name, email, cpf, password }: UserRequest) {        
        const currentUser = await this.getCurrentUser(id);
        var passwordHash = "";

        if(typeof password !== `undefined`) {
            passwordHash = await hash(password, 13);
        }

        const updateUser = await prismaClient.user.update(
            {
                where: {
                    id: id
                }, 
                data: {
                    name: name ? name : currentUser.name,
                    email: email ? email : currentUser.email,
                    cpf: cpf ? cpf : currentUser.cpf,
                    password: password ? passwordHash : currentUser.password,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    cpf: true
                }
            }
        );

        return updateUser;
    }

    async getCurrentUser(id: string) {
        const currentUser = await prismaClient.user.findFirst({
            where: {
                id:id
            }
        });

        return currentUser;
    }
}

export { UpdateUserService };