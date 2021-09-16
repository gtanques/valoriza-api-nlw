import { request, response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./midlewares/ensureAdmin";
import { ensureAuthenticate } from "./midlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const createComplimentController = new CreateComplimentController();

router.get("/test", ensureAuthenticate, (request, response) => { return response.send("Hello world"); })
router.post("/users", ensureAuthenticate, createUserController.handle);
router.post("/tags", ensureAuthenticate, ensureAdmin, createTagController.handle);
router.post("/auth", authUserController.handle);
router.post("/compliments", ensureAuthenticate, createComplimentController.handle);

export { router }