import { Router,Request,Response} from "express";
import User from "../models/User";
import { register } from "../controllers/UserController";
const router = Router()

// Router of register 
router.post('/register',register)
router.get('/users',async(req:Request,res: Response)=>{
   try{
    const usuarios = await User.find()
    res.status(201).json({
        usuarios
    })
   }catch(err)  {
res.status(500).json(err)
   }
})


//  Router for delete user
router.delete('/:id',async(req:Request,res: Response)=>{
    const id = req.params.id

  
    try{
        const userdeleted = await User.findOne({
            where:id

            })
            await userdeleted?.deleteOne()

     res.status(201).json({
        message: `User deleted ${id}`,
     })
    }catch(err)  {
 res.status(500).json(err)
    }
 })


router.get('/emailOfUsers', async(req: Request, res: Response)=>{
try{
const users = await  User.find()

const emails = users.map(user => user.email)

res.status(201).json(emails)
}catch(err)  {
    res.status(500).json(err)
       }
 })





export default router;