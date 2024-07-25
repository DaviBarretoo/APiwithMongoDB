import { Request, Response } from "express";
import User from "../models/User";
import { UserLogin } from "../interfaces/interfaceforuser";
import * as EmailValidator from "email-validator";

export const register = async (req: Request, res: Response) => {
  const { name, email, password }: UserLogin = req.body;

  try {
    const newUser = new User({ name, email, password });
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

      res.status(201).json({
        message: `new user ${email}`,
      });
      return;
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export const Userscheck = async(req:Request,res: Response)=>{
    try{
     const usuarios = await User.find()
     res.status(201).json({
         usuarios
     })
    }catch(err)  {
 res.status(500).json(err)
    }
 }

 export const userDelete=  async(req:Request,res: Response)=>{
    const id = req.params.id

  
    try{
        const userdeleted = await User.findOne({
            where:id

            })
            await userdeleted?.deleteOne()

     res.status(201).json({
        message: `User deleted`,
     })
    }catch(err)  {
 res.status(500).json(err)
    }
 }
