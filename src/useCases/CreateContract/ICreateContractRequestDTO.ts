import { IProduct } from "../../models/Contract";

export interface ICreateContractRequestDTO {
    
    country: String,
    state: String,
    city: String,
    docNumber: String,
    socialReason: String,
    address: String,
    district: String,
    number: Number,
    zipCode: String,
    email: String,
    phone: String,
    startDate: Date,
    endDate: Date,
    dueDay: Number,
    file: String,
    products: IProduct,
    company: String
}