import { Company, ICompany } from "../../models/Company";
import { ICompanyRepository } from "../ICompanyRepository";



export class CompanyRepository implements ICompanyRepository {
    async findAll(): Promise<ICompany[] | null> {
        
        const companies = await Company.find();

        if(companies) {
            return companies;
        }
        return null
    }

    
    findByName(name: string): Promise<ICompany | null> {
        throw new Error("Method not implemented.");
    }

}