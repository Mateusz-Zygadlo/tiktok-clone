import type { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';

export const newAccount = [
  async (req: Request, res: Response, next: NextFunction) => {
    const {day, description, firstName, lastName, month, nick, password, year} = req.body.userData;
    let {email} = req.body.userData;
    email = email.toLowerCase();

    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      nick,
      firstName,
      lastName,
      description,
      email,
      password: hashPassword,
      following: [],
      followers: [],
      videos: [],
      allProfileLikes: 0,
      videoLikes: [],
      comments: [],
      privateAccount: false,
      dateOfBirth: `${year}-${month}-${day}`,
      yearOfBirth: `${year}`
    }).save((err: any) => {
      if(err){
        return next(err);
      }
    })

    return res.json({
      success: 'you create account'
    })
  }
]