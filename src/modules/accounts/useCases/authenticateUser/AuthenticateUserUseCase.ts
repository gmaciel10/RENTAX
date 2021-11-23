import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {}
    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError("Email or password incorrect", 400);
        }
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect", 400);
        }

        const token = sign({}, "a8037c92c66374de169a9834428f38a5", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        };
        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };