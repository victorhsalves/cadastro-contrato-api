import { IUser, User } from "../../models/User";
import { IUserRepository } from "../IUserRepository";



export class UserRepository implements IUserRepository {
    
    async findByUsername(username: string): Promise<IUser | null> {
        
        const user = await User.findOne({
            username: username
        })
        
        return user;
    }

    async save(user: IUser): Promise<void> {

        try {
            await User.create(user)
        }
        catch(e) {
            console.log(e);
            throw new Error("Erro ao salvar usuário!");
        }
    }
}