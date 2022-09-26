import mongoose from "mongoose";

export interface ICompany extends mongoose.Document {
    name: String
}

const CompanySchema = new mongoose.Schema({
    name: String
})

const Company = mongoose.model<ICompany>('Company', CompanySchema);

export { Company };