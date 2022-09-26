import { IUser } from "../models/User";


export interface IUserRepository {
    findByUsername(username: string): Promise<IUser | null>;
    save(user: IUser): Promise<void>;
}