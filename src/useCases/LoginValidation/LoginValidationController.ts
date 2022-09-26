import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ErrorHandler } from "../../utils/ErrorHandler";



export class LoginValidationController {

    handle(request: Request, response: Response, next: NextFunction) {
        var token: string = '';
        if (request.method == 'GET') {
            token = <string> request.headers.authorization;
        } else if (request.method == 'POST') {
            // token = <string> request.body.headers['Authorization'];
            token = <string> request.headers.authorization;
        }
        
        if (token == '') return response.status(403).json({
            auth: false,
            message: 'Token não fornecido!'
        })
        console.log(token)

        try {
            var decodedToken = jwt.verify(token.substring(7), String(process.env.SECRET));

            response.status(201);
            request.body.decodedToken = decodedToken;
            next();
        }
        catch (error) {
            return response.status(401).json({
                message: ErrorHandler(error) || 'Erro inesperado!'
            })
        }
    }
}