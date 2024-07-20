import { Router,Request,Response} from "express";
import User from "../models/User";
import {UserLogin} from "../interfaces/interfaceforuser"

const router = Router()

// Router of register 

router.post('/register', async(req: Request, res: Response)=>{

    const {name,email,password}: UserLogin = req.body

    try{
const newUser = new User({name,email,password})
await newUser.save()

res.status(201).json({
    message: `new user ${email}`,
    user: newUser

})

    }catch(err){
        res.status(400).json(err)
    }
})

export default router