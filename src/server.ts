
import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import "./database";

import { router } from "./routes";


// @types/express
const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })

});

// manter rodando: yarn add ts-node-dev -D | yarn dev
app.listen(3000, () => console.log("running server"));