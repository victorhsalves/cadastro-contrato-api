import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";
import { ErrorHandler } from "../../utils/ErrorHandler";


export class LoginController {

    constructor(
        private loginUseCase: LoginUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        try {
            const loggedUser = await this.loginUseCase.execute(username, password);
            return response.status(200).cookie(
                'auth-token',
                'Bearer ' + loggedUser.token,
                {
                    expires: new Date(Date.now() + 50 * 60 * 1000)
                }).json({
                    auth: true,

                    user: loggedUser
                });

        } catch (error) {
            return response.status(403).json({
                message: ErrorHandler(error) || 'Erro inesperado!'
            })
        }
    }

}