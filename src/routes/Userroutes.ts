import { Router,Request,Response} from "express";
import User from "../models/User";
import { emailOfUsers, register, userDelete, Userscheck } from "../controllers/UserController";
const router = Router()


router.post('/register',register)
router.get('/users',Userscheck)
router.delete('/:id',userDelete)
router.get('/emailOfUsers', emailOfUsers)

export default router;