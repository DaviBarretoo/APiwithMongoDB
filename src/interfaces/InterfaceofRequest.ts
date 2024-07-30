import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export  interface Crequest  extends Request{
    token: string | JwtPayload
}