import { UserRepository } from "../../respositories/implementations/UserRepository";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";




const userRepository = new UserRepository();

const loginUseCase = new LoginUseCase(
    userRepository
);

const loginController = new LoginController(
    loginUseCase
);

export { loginUseCase, loginController }