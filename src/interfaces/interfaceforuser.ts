import { Document } from "mongoose"

export interface UserLogin extends Document  {
name: string,
email: string,
password: string
}
