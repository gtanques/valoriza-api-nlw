import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string
}


export function ensureAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction
) {

    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");
    console.log(token);

    try {
        const { sub } = verify(token, "934c0034795c97da8e8ee7ec73cd231d") as IPayLoad;

        request.user_id = sub
        return next();

    } catch (error) {
        return response.status(401).end();
    }

}