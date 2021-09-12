import { request, response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

router.get("/test", (request, response) => { return response.send("Hello world"); })

router.post("/users", createUserController.handle);

export { router }