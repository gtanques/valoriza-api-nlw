import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository"
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean
}

class CreateUserService {
    async execute({ name, email, password, admin }: IUserRequest) {

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


        const passwordHash = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            password: passwordHash,
            admin
        })

        await userRepository.save(user);

        return user;
    }
}

export { CreateUserService }