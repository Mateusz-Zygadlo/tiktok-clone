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
    const user = await User.findOne({ email: email });

    if(user == null){
      console.log('not found email')
      return res.json({ error: 'not found email'});
    }
    try{
      if(await bcrypt.compare(password, user.password)){
        const userObj = {...user};
        const accessToken = jwt.sign(userObj, keys.SECRET_KEY);
        console.log('login to account')

        return res
          .cookie('JWT-TOKEN', accessToken, {
            sameSite: 'strict', 
            path: '/', 
            expires: new Date(new Date().getTime() + 1500000 * 1000),
            secure: true,
          })
          .json({ success: 'login to account' })
      }else{
        console.log('password is incorrest')
        return res.json({ error: 'password in incorrect' })
      }
    }catch(err){
      console.log('not expecting error');
      return res.json({ error: 'not expecting error' })
    }
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