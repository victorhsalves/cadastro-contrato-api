import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { IUser, User } from "../../models/User";
import { IUserRepository } from "../../respositories/IUserRepository";




export class SignupUseCase {

    constructor(
        private signupRepository: IUserRepository,
    ){}

    async execute(username: string, password: string) {

        const checkUser = await this.signupRepository.findByUsername(username);

        if (!checkUser) {

            const salt = await bcrypt.genSalt(6);
            const hashedPwd = await bcrypt.hash(password, salt)
            const user = new User({
                username: username,
                password: hashedPwd
            })

            this.signupRepository.save(user);
        }
        else {
            throw new Error('Usuário já cadastrado!');
        }
    }
}