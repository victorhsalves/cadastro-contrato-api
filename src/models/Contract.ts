import mongoose from "mongoose";

export interface IProduct extends mongoose.Document {
    name: String,
    amount: Number,
    finalUnitPrice: Number,
    installments: Number,
    paidInstallments: Number,
    startDate: Date
}

export interface IContract extends mongoose.Document {
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
    products: [IProduct],
    company: String
}

const ProductSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    finalUnitPrice: Number,
    installments: Number,
    paidInstallments: Number,
    startDate: Date
})

const ContractSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: String,
    docNumber: {
        type: String,
        required: true
    },
    socialReason: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: String,
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    dueDay: {
        type: Number,
        required: true
    },
    file: String,
    products: {
        type: [ProductSchema]
    },
    company: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
})

const Contract = mongoose.model<IContract>('Contract', ContractSchema);

export { Contract };