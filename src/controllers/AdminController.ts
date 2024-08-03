import User from "../models/User";
import { Request, Response } from "express";


// check email of Users
export const emailOfUsers = async(req: Request, res: Response)=>{
    try{
    const users = await  User.find()
    
    const emails = users.map(user => user.email)
    
    res.status(200).json(emails)
    }catch(err)  {
        res.status(500).json(err)
           }
     }


     