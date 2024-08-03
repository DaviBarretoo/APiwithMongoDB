import { Request, Response } from "express";
import User from "../models/User";
import { UserLogin } from "../interfaces/interfaceforuser";
import {interfaceOfLogin} from "../interfaces/interfaceForLogin"
import * as EmailValidator from "email-validator";
import jwt from "jsonwebtoken";

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

// Router of login == necessario verificação de login e gerar um token para users logado
export const LoginUser = async (req:Request,res: Response)=> {

  const {email, password }:interfaceOfLogin = req.body;

  try{

const user = await User.findOne({email})

if(!user){

  res.status(400).json("Usuário não encontrado ou credências incorretas");
  return
}

const passwordOfUser = await cPasswordBcrypt(password , user.password)

if(!passwordOfUser){
  res.status(400).json("Email ou senha incorreta");
  return
}


const foundUser = await User.findOne({ name: user.name, _id:user._id});

if (!foundUser) {
  return console.log("user n encontrado")
}

 const SECRET_KEY = process.env.TOKEN_SECRET ;
if (!SECRET_KEY){
 
  return console.log("ERROR IN KEY")
}


const token = jwt.sign({ _id: foundUser?._id?.toString(), name: foundUser?.name }, SECRET_KEY, {
  expiresIn: process.env.TOKEN_EXPIRATION,

  
});


res.status(201).json({ user: { email }, token: token });



  }catch(err){
    res.status(500).json(err)
  }

}

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
// ROUTER TO UPDATE Use
export const UpdateDados = async(req: Request,res: Response) => {

  const id = req.params.id
const { name, email, password }: UserLogin = req.body;

const userupdating = {
  name,
   email,
    password
}

  try{
const atualizacaoDeUsuario = await User.updateOne({_id:id},userupdating)

if(id === undefined ){
  res.status(500).json({
    message: `USER NÃO ENCONTRADO ERRO INTERNO`,
  })
}
res.status(200).json(userupdating)

  }catch(err){
    res.status(500).json(err)
  }
}