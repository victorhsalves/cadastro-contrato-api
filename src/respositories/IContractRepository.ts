import { IContract } from "../models/Contract";


export interface IContractRepository {
    findAll(): Promise<IContract[] | null>;
    save(contract: IContract): Promise<void>;
}