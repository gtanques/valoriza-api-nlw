import { request, response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.get("/test", (request, response) => { return response.send("Hello world"); })

router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);

export { router }