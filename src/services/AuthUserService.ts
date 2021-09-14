import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: IAuthenticateRequest) {

        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({
            email
        })

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        const token = sign(
            {
                email: user.email
            },
            "934c0034795c97da8e8ee7ec73cd231d",
            {
                subject: user.id,
                expiresIn: "1d"
            });

        return token;
    }
}

export { AuthUserService }