import jwt from "jsonwebtoken";
import {Request,Response, NextFunction} from "express"
import { Crequest } from "../interfaces/InterfaceofRequest";

//const SECRET_KEY :Secret = process.env.TOKEN_SECRET

export const auth = async(req: Request,res: Response, next: NextFunction)=>{
    

try{
    const token = req.header('Authorization')?.replace('Bearer ', '')
    
    if(!token){
        throw new Error(' Não foi possivel LOCALIZAR O TOKEN')
    }
if(process.env.TOKEN_SECRET === undefined){
    throw new Error(' ERROR IN SECRET TOKEN PLEASE CONTACT THE DEVELOPER')
}
       const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    (req as Crequest).token= decoded
   
next()
}catch(err){
    console.log(err)
    res.status(401).send("Erro interno")
}
}