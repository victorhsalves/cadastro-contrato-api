import { Request, Response } from "express";
import { ErrorHandler } from "../../utils/ErrorHandler";
import { SignupUseCase } from "./SignupUseCase";


export class SignupController {

    constructor(
        private signupUseCase: SignupUseCase
    ){}

    async handle(request: Request, response: Response) {

        const { username, password } = request.body;

        try {
            await this.signupUseCase.execute(username, password);
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: ErrorHandler(error) || 'Unexpected Error'
            })
        }
    }
}