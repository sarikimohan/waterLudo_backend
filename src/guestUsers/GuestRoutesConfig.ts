import express from "express"
import debug from "debug"
import GuestUsersController from "./controllers/GuestUsersController.js"
import { CommonRoutesConfig } from "../common/commonRoutesConfig.js"


const debugLog : debug.IDebugger = debug('GuestUsersRoutesConfig: ')

export class GuestUsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application){
    super(app,"GuestUsersRoutes")
  }

  configureRoutes(){
    this.app.route(`/guestUsers/login`)
    .get(GuestUsersController.getGuestUser)

    this.app.route(`/guestUsers/transfer`)
    .get(GuestUsersController.transferUser)

    return this.app
  }
}