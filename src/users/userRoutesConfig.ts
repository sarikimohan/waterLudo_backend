import { CommonRoutesConfig } from "../common/commonRoutesConfig.js";
import UsersController from "./controllers/usersController.js";
import BodyValidationMiddleware from "../common/middleware/bodyValidationMiddleware.js";
import { body } from "express-validator";
import express from "express";
import debug from "debug";
import usersController from "./controllers/usersController.js";

const debugLog: debug.IDebugger = debug("userRoutesConfig: ");

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRouters");
  }

  configureRoutes() {
    this.app.route(`/Users/login`).get(UsersController.userLogin);

    this.app.route(`/users/manageCoins`).get(usersController.manageCoins);

    this.app.route(`/users/userProfle`).get(usersController.UserProfile)

    this.app.route(`/users/win`).get(usersController.UserWin)

    this.app.route(`/users/leaderBoard`).get()
    return this.app;
  }
}
