import { ContractRepository } from "../../respositories/implementations/ContractRepository";
import { CreateContractController } from "./CreateContractController";
import { CreateContractUseCase } from "./CreateContractUseCase";



const contractRepository = new ContractRepository();

const createContractUseCase = new CreateContractUseCase(contractRepository);

const createContractController = new CreateContractController(createContractUseCase);

export {createContractUseCase, createContractController}
