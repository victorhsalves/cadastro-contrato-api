import { Request, Response } from "express";
import { ErrorHandler } from "../../utils/ErrorHandler";
import { CreateContractUseCase } from "./CreateContractUseCase";
import { ICreateContractRequestDTO } from "./ICreateContractRequestDTO";




export class CreateContractController {

    constructor(
        private createContractUseCase: CreateContractUseCase
    ) {}

    async handle(request: Request, response: Response) {

        const {contract}:{contract:ICreateContractRequestDTO} = request.body;

        try {
            await this.createContractUseCase.execute(contract);
            return response.status(200).send();
        }catch (error) {
            return response.status(403).json({
                message: ErrorHandler(error) || 'Erro inesperado!'
            })
        }
    }
}