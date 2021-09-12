import { request, response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./midlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.get("/test", (request, response) => { return response.send("Hello world"); })
router.post("/users", ensureAdmin, createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router }