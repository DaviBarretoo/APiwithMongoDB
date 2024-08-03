import { Router,Request,Response} from "express";
import {LoginUser, register, UpdateDados, userDelete, Userscheck } from "../controllers/UserController";
import { emailOfUsers } from "../controllers/AdminController";
import { auth } from "../middlewares/auth";
const router = Router()


router.post('/register',register)
router.get('/users',Userscheck)
router.delete('/:id',userDelete)

router.get('/emailOfUsers',auth, emailOfUsers) // ADD ADMIN PERMISSION!

router.post('/login',LoginUser)
router.patch("/userupdate/:id",UpdateDados)
export default router;