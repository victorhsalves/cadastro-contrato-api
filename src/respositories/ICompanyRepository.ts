import {ICompany} from "../models/Company";



export interface ICompanyRepository {
    findAll(): Promise<ICompany[] | null>;
    findByName(name: string): Promise<ICompany | null>;
}