import { UserRepository } from "../../respositories/implementations/UserRepository";
import { SignupController } from "./SignupController";
import { SignupUseCase } from "./SignupUseCase";




const userRepository = new UserRepository();

const signupUseCase = new SignupUseCase(
    userRepository
);

const signupController = new SignupController(
    signupUseCase
);

export { signupUseCase, signupController }