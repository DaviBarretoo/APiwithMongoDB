import { Request, Response } from "express";
import User from "../models/User";
import { UserLogin } from "../interfaces/interfaceforuser";
import * as EmailValidator from "email-validator";
import bcrypt from 'bcrypt'

const saltRounds = 10 

 const PasswordBcrypt = async (password: string ): Promise<string> => {
  try{ 
    const salt = await bcrypt.genSalt(saltRounds)
    const hPassword = await bcrypt.hash(password,salt)
    return hPassword
  }catch(err) {
    console.log(err)
    throw new Error("Error")
  }
 }

 const cPasswordBcrypt = async(password:string, PBcrypt: string): Promise<boolean> =>{
  try{
      return await bcrypt.compare(password, PBcrypt)
  }catch(err){
    console.log(err + "cPasswordBcrypt")
    throw new Error("Error")
  }
 }


 let users: UserLogin[] = []

export const register = async (req: Request, res: Response) => {
  
  const { name, email, password }: UserLogin = req.body;
  try {
    const passwordNew = await PasswordBcrypt(password)
    const newUser: UserLogin = new User({ name, email, password:passwordNew });
   
    const userInDB = await User.find();
    const emailInDB = userInDB.map((User) => User.email);

    EmailValidator.validate(newUser.email);

    if (EmailValidator.validate(newUser.email) === false) {
      res.status(201).json({
        message: `${name} Esse email não é valido por favor inserir um email valido`,
      });
      return;
    }

    if (newUser.password.length < 6) {
      res.status(201).json({
        message: `${name} A sua senha tem que ser maior que 6 caracteres `,
      });
      return;
    }

    //checking the existence of the user in the database (incluedes check emailInDb === newUser.email)
    if (emailInDB.includes(newUser.email)) {
    
      res.status(201).json({
        message: `Este User  já existe ${email}`,
      });
      return;
    } else {
  
      await newUser.save();
    users.push(newUser)
   
     

      res.status(201).json({
        message: ` new user ${email}`,
      });
      return;
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export const Userscheck = async (req: Request, res: Response) => {
  try {
    const usuarios = await User.find();
    res.status(201).json({
      usuarios,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const userDelete = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const userdeleted = await User.findOne({
      _id: id,
    });
    await userdeleted?.deleteOne();

    res.status(201).json({
      message: `User deleted`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Move to admin routes 
export const emailOfUsers = async(req: Request, res: Response)=>{
    try{
    const users = await  User.find()
    
    const emails = users.map(user => user.email)
    
    res.status(201).json(emails)
    }catch(err)  {
        res.status(500).json(err)
           }
     }
