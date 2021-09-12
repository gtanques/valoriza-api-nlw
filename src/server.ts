import express from "express";
import "reflect-metadata";

import "./database";
import { router } from "./routes";

// @types/express
const app = express();
app.use(express.json());
app.use(router);

// manter rodando: yarn add ts-node-dev -D | yarn dev
app.listen(3000, () => console.log("running server"));