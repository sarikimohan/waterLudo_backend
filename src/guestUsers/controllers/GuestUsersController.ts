import debug from 'debug'
import express from 'express'
import GuestUsersService from '../service/GuestUsersService.js'


const debugLog : debug.IDebugger = debug('GuestUsersController: ')

class GuestUsersController {

  async getGuestUser(req: express.Request,res:express.Response,next:express.NextFunction){
      try{
        const guestUser = await GuestUsersService.getGuestUser(req,res,next)
        res.status(200).send({
          status: true,
          message: "guest user created successfully",
          login_user_data: guestUser
        })
      }catch(err){
        res.status(500).send({
          status: false,
          message: "failed to create guest user",
          error:err
        })
      }
  }

  async transferUser(req:express.Request,res:express.Response){
    try{
      const user = await GuestUsersService.transferUser(req,res)
      res.status(200).send({
        status:true,
        message: "successfully transfered user from Guest to Social user",
        login_user_data: user
      })
    }catch(err){
      res.status(500).send({
        status: false,
        message: "failed to transfer user from guest to social"
      })
    }
  }
}

export default new GuestUsersController()