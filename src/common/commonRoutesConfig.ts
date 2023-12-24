import debug from "debug"
import  express, { application }  from "express"


const debugLog : debug.IDebugger = debug('commonRoutesConfig: ')
export abstract class CommonRoutesConfig{
  app: express.Application
  name:string

  constructor(app:express.Application,name:string){
    this.app=app
    this.name=name
    this.configureRoutes();

  }
  getName(){
    return this.name
  }
  abstract configureRoutes(): express.Application


}