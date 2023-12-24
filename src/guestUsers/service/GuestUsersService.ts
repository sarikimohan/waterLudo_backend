import GuestUsersDao from "../daos/GuestUsersDao.js";
import express from "express";

class GuestUsersService {
  async getGuestUser(req: express.Request, res: express.Response,next: express.NextFunction) {
    try {
      return GuestUsersDao.getGuestUser(req, res,next);
    } catch (err) {
      console.log(err)
    }
  }

  async transferUser(req: express.Request, res: express.Response) {
    return GuestUsersDao.transferUser(req, res);
  }
}

export default new GuestUsersService();
