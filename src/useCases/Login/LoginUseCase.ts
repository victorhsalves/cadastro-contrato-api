import jwt from "jsonwebtoken";
import { env } from "process";
import { IUserRepository } from "../../respositories/IUserRepository";




export class LoginUseCase {

    constructor (
        private userRepository: IUserRepository
    ) {}

    async execute(username: string, password: string) {

        const user = await this.userRepository.findByUsername(username);

        if (user) {
            if (user.password === password) {
                var secret: jwt.Secret = String(env.SECRET);
                console.log(secret)

                const token = jwt.sign(
                    {
                        username: user.username
                    },
                    secret,
                    {
                        expiresIn: '1 day'
                    }
                )
                const loggedUser = {
                    username: user.username,
                    token: token
                }
                return loggedUser;
            }
        }

        throw new Error('Credenciais inválidas!')
    }
}