import { Router } from "express";
import { loginController } from "./useCases/Login";
import { signupController } from "./useCases/Signup";
import { createContractController } from "./useCases/CreateContract";
import { loginValidationController } from "./useCases/LoginValidation";
import { ContractRepository } from "./respositories/implementations/ContractRepository";
import { Company } from "./models/Company";


const router = Router();

router.get('/test',
    (request, response, next) => {
        loginValidationController.handle(request, response, next);
    },
    async (request, response) => {
        // const {companyName} = request.body;
        const contracts = await new ContractRepository().findAll();
        console.log(contracts)
        return response.status(200).json(contracts)
    }
)

router.post('/Signup', (request, response) => {
    return signupController.handle(request, response);
});

router.post('/Login', (request, response) => {
    console.log('Success:', request);
    return loginController.handle(request, response);
})

router.post('/CreateContract',
    (request, response, next) => {
        loginValidationController.handle(request, response, next);
    },
    (request, response) => {
        return createContractController.handle(request, response);
    }
)


export { router }