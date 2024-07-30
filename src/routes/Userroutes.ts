import { Router,Request,Response} from "express";
import User from "../models/User";
import { emailOfUsers, LoginUser, register, userDelete, Userscheck } from "../controllers/UserController";
import { auth } from "../middlewares/auth";
const router = Router()


router.post('/register',register)
router.get('/users',Userscheck)
router.delete('/:id',userDelete)
router.get('/emailOfUsers',auth, emailOfUsers)
router.post('/login',LoginUser)
export default router;