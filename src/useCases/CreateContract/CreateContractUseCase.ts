import { Contract } from "../../models/Contract";
import { IContractRepository } from "../../respositories/IContractRepository";
import { ICreateContractRequestDTO } from "./ICreateContractRequestDTO";


export class CreateContractUseCase {

    constructor(
        private contractRepository: IContractRepository
    ) {}

    async execute(data: ICreateContractRequestDTO) {
        const contract = new Contract(data);

        try {
            await this.contractRepository.save(contract)
        } catch (error) {
            throw new Error("Erro ao criar contrato!");
        }
    }
}