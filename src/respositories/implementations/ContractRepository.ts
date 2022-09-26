import { Contract, IContract } from "../../models/Contract";
import { IContractRepository } from "../IContractRepository";



export class ContractRepository implements IContractRepository {
    async findAll(): Promise<IContract[] | null> {
        
        const contracts = await Contract.aggregate([
            {
                $lookup: {
                    from: "companies",
                    localField: "company",
                    foreignField: "_id",
                    as: "companyObject"
                }
            }, 
            {
                $unwind: "$companyObject"
            },
            {
                $project: {
                    _id: 0, docNumber: 1, socialReason: 1, company: "$companyObject.name",
                    products: { $size: "$products" }
                }
            }
        ]);

        if(contracts) {
            return contracts;
        }

        return null;
    }

    
    async save(contract: IContract): Promise<void> {
        
        try {
            await Contract.create(contract);
        }
        catch(e) {
            console.log(e);
            throw new Error("Erro ao salvar contrato!")
        }
    }
}