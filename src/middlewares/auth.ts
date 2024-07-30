import jwt, {Secret,JwtPayload} from "jsonwebtoken";
import {Request,Response, NextFunction} from "express"
import { Crequest } from "../interfaces/InterfaceofRequest";

export const SECRET_KEY: Secret = 'DEUSÉFIELESEMPREVAISERPORTODAAMINHAVID@2K24FOGUETENTEMRÉ'


export const auth = async(req: Request,res: Response, next: NextFunction)=>{
    

try{
    const token = req.header('Authorization')?.replace('Bearer ', '')
    
    if(!token){
        throw new Error(' Não foi possivel LOCALIZAR O TOKEN')
    }

       const decoded = jwt.verify(token, SECRET_KEY);

    (req as Crequest).token= decoded
   
next()
}catch(err){
    console.log(err)
    
    res.status(401).send("Erro interno")
}
}