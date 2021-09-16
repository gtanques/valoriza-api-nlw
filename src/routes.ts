import { request, response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./midlewares/ensureAdmin";
import { ensureAuthenticate } from "./midlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController();

// Auth
router.post("/auth", authUserController.handle);

// Test
router.get("/test", ensureAuthenticate, (request, response) => { return response.send("Hello world"); })

// Users
router.post("/users", ensureAuthenticate, createUserController.handle);
router.get("/users/compliments/send", ensureAuthenticate, ensureAdmin, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticate, ensureAdmin, listUserReceiverComplimentsController.handle);

// Tags
router.post("/tags", ensureAuthenticate, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticate, ensureAdmin, listTagsController.handle);

// Compliments
router.post("/compliments", ensureAuthenticate, createComplimentController.handle);


export { router }