import type { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import { keys } from '../keys/jwtToken';

export const newAccount = [
  async (req: Request, res: Response, next: NextFunction) => {
    const {day, description, firstName, lastName, month, nick, password, year} = req.body.userData;
    let {email} = req.body.userData;
    email = email.toLowerCase();

    console.log(req.body);

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
      yearOfBirth: `${year}`,
      picture: req.body.imageName,
    }).save((err: any) => {
      if(err){
        return next(err);
      }
    })

    return res.json({
      success: 'you create account'
    })
  }
];

export const login = [
  async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;
    User.findOne({ email: email }).exec(async (err, user) => {
      if(err){
        return next(err);
      }
      if(user == null){
        return res.json({ error: 'not found email'});
      }
      if(await bcrypt.compare(password, user.password)){
        const userObj = {...user};
        const accessToken = jwt.sign(userObj, keys.SECRET_KEY);

        return res
          .cookie('JWT-TOKEN', accessToken, {
            sameSite: 'strict', 
            path: '/', 
            expires: new Date(new Date().getTime() + 1500000 * 1000),
            secure: true,
          })
          .json({ success: 'login to account' })
      }else{
        return res.json({ error: 'password in incorrect' })
      }
    })
  }
]

export const logout = (req: Request, res: Response, next: NextFunction) => {
  return res
    .status(202)
    .clearCookie('JWT-TOKEN', {path: '/'})
    .json({
      success: 'logout profile'
    })
}