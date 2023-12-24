// we import express to add types to the request/response objects from our controller functions
import express from "express";

// we import our newly created user services
import usersService from "../services/users.service.js";

// we import the argon2 library for password hashing
// import argon2 from 'argon2';

// we use debug with a custom context as described in Part 1
import debug from "debug";

const log: debug.IDebugger = debug("usersController: ");
class UsersController {
  async listUsers(req: express.Request, res: express.Response) {
    // const users = await usersService.list(100, 0);
    res.status(200).send("ok backend working");
  }

  async userLogin(req: express.Request, res: express.Response) {
    var user;
    try {
      user = await usersService.userLogin(req.body);
      res.status(201).send({ login_user_data: user });
    } catch (err) {
      res.status(409).send("email already exsists");
    }
  }

  async manageCoins(req: express.Request,res: express.Response){
    try{
      var coins= await usersService.manageCoins(req.body)
      res.status(202).send({
        status: true,
        message: "coins updated successfully",
        coin: coins
      })
    }catch(err){
      res.status(500).send({
        status:false,
        message: "failed to update coins",
        error: err
      })
    }

    
  }

  async UserProfile(req:express.Request,res:express.Response){
    try{
      var profile = await usersService.getUserProfile(req.body)
      res.status(200).send(profile )
    }catch(err){
      res.status(500).send(err)
    }
  }

  async UserWin(req:express.Request,res:express.Response) {
    try{
      await usersService.userWin(req.body)
      res.status(202).send({
        status:true,
        message: "data updated successfully"
      })
    }catch(err){
      res.status(500).send({
        status:true,
        error:err
      })
    }
  }
}

export default new UsersController();
