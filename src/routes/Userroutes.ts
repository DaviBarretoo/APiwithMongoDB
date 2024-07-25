import { Router,Request,Response} from "express";
import User from "../models/User";
import { register, userDelete, Userscheck } from "../controllers/UserController";
const router = Router()

// Router of register 
router.post('/register',register)

router.get('/users',Userscheck)


//  Router for delete user
router.delete('/:id',userDelete)


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