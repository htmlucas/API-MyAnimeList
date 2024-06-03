import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function verifyAuth (request: Request, response: Response, next: NextFunction) {    
    const authToken = request.headers.authorization

    if(authToken){

        try {
            verify(authToken,'123456789')
            return next()
        } catch (error) {
            return response.status(401).json({message: 'unauthorized'})
        }
    }

    return response.status(401).json({message: 'unauthorized'})
}