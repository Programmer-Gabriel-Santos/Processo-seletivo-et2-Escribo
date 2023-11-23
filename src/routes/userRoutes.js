import { UserController } from "../controller/UserController.js";
import { UserService } from "../services/UserService.js";
import { UserDataBase } from "../dataBase/UserDataBase.js";
import { IdGenerator } from "../security/IdGenerator.js";
import { HashManager } from "../security/HashManager.js";
import { Authenticator } from "../security/Authenticator.js";
import { Router } from "express";


export const userRouter = Router();

const userController = new UserController(
    new UserService(
        new UserDataBase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
);

userRouter.post("/signup", userController.signup);

userRouter.post("/login", userController.login);

userRouter.get("/info", userController.getInfoUser);