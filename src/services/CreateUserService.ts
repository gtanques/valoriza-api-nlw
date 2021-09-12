import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean
}


class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {

        console.log(`nome: ${name}, email: ${email}, admin: ${admin}`)

        const userRepository = getCustomRepository(UserRepository);
        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if (!email) {
            throw new Error("e-mail incorreto");
        }

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }


        const user = userRepository.create({
            name,
            email,
            admin
        })

        await userRepository.save(user);

        return user;
    }
}


export { CreateUserService }